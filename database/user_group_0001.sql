-- Bootleg way of keeping track of migrations 0001

-- Artist/Groups table
create table if not exists groups (
  id serial primary key,
  name text not null,
  logo_src text,
  musicbrainz_id text unique,
  created_at timestamptz default now() not null
);

-- User Group Rankings table (junction table)
create table if not exists user_group_rankings (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  group_id integer references groups(id) on delete cascade not null,
  rank smallint not null check (rank > 0), -- Using smallint instead of integer
  notes text,
  created_at timestamptz default now() not null,
  updated_at timestamptz default now() not null,
  
  constraint unique_user_group unique(user_id, group_id)
);

-- RLS Policies
alter table groups enable row level security;
alter table user_group_rankings enable row level security;

-- Groups policies
create policy "Groups are viewable by everyone"
  on groups for select
  to authenticated, anon
  using (true);

-- User Group Rankings policies
create policy "Users can view their own rankings"
  on user_group_rankings for select
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can insert their own rankings"
  on user_group_rankings for insert
  to authenticated
  with check (auth.uid() = user_id);

create policy "Users can update their own rankings"
  on user_group_rankings for update
  to authenticated
  using (auth.uid() = user_id);

create policy "Users can delete their own rankings"
  on user_group_rankings for delete
  to authenticated
  using (auth.uid() = user_id);