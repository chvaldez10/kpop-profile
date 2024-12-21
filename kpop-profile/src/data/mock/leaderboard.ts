import { LeaderboardEntry } from "@/types/profile/leaderboardEntry";

export const mockLeaderboardData: LeaderboardEntry[] = [
  {
    group: {
      id: 1,
      name: "Blackpink",
      musicbrainzId: "1234567890",
      socialId: 1,
    },
    userUuid: "1234567890",
    rank: 1,
    notes: "This is a note",
    logoUrl: "/images/logos/bp.svg",
  },
  {
    group: {
      id: 2,
      name: "Nmixx",
      musicbrainzId: "some-musicbrainz-id-2",
      socialId: 2,
    },
    userUuid: "user-uuid-2",
    rank: 2,
    notes: "Second favorite group",
    logoUrl: "/images/logos/nmixx-logo.jpg",
  },
  {
    group: {
      id: 3,
      name: "Aespa",
      musicbrainzId: "some-musicbrainz-id-3",
      socialId: 3,
    },
    userUuid: "user-uuid-3",
    rank: 3,
    notes: "Third favorite group",
    logoUrl: "/images/logos/aespa.svg",
  },
  {
    group: {
      id: 4,
      name: "NewJeans",
      musicbrainzId: "some-musicbrainz-id-4",
      socialId: 4,
    },
    userUuid: "user-uuid-4",
    rank: 4,
    notes: "Fourth favorite group",
    logoUrl: "/images/logos/nj.svg",
  },
  {
    group: {
      id: 5,
      name: "Gidle",
      musicbrainzId: "some-musicbrainz-id-5",
      socialId: 5,
    },
    userUuid: "user-uuid-5",
    rank: 5,
    notes: "Fifth favorite group",
    logoUrl: "/images/logos/gidle-logo.jpg",
  },
];
