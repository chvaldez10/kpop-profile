import { Group } from "@/types/supabase/groupRankings";

export interface LeaderboardEntry {
  group: Group;
  userUuid: string;
  rank: number;
  notes?: string;
  logoUrl: string;
}
