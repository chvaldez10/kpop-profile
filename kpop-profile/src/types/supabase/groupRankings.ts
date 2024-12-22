export interface GroupSocials {
  groupId: number;
  youtubeUrl?: string;
  instagramUrl?: string;
  spotifyUrl?: string;
}

export interface Group {
  id: number;
  name: string;
  musicbrainzId: string;
  groupSocials?: GroupSocials;
}

export interface UserGroupRanking {
  id: number;
  userUuid: string;
  groupId: number;
  rank: number;
  notes: string;
  logoSrc: string;
}
