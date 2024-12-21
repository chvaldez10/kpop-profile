export interface GroupSocials {
  group_id: number;
  youtube_url: string;
  instagram_url: string;
  spotify_url: string;
}

export interface Group {
  id: number;
  name: string;
  musicbrainz_id: string;
  social_id: number;
}

export interface UserGroupRanking {
  id: number;
  user_id: string;
  group_id: number;
  rank: number;
  notes: string;
  logo_url: string;
}
