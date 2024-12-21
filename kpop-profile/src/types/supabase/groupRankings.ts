export interface GroupSocials {
  groupId: number;
  youtubeUrl: string;
  instagramUrl: string;
  spotifyUrl: string;
}

export interface Group {
  id: number;
  name: string;
  musicbrainzId: string;
  socialId: number;
}

export interface UserGroupRanking {
  id: number;
  userUuid: string;
  groupId: number;
  rank: number;
  notes: string;
  logoUrl: string;
}
