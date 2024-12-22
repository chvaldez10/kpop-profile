import { LeaderboardEntry } from "@/types/profile/leaderboardEntry";

export const mockLeaderboardData: LeaderboardEntry[] = [
  {
    group: {
      id: 1,
      name: "Blackpink",
      musicbrainzId: "1234567890",
      groupSocials: {
        groupId: 1,
        youtubeUrl: "https://www.youtube.com/channel/UCOmHUn--16B90oW2L6FRR3A",
      },
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
      groupSocials: {
        groupId: 2,
        youtubeUrl: "https://www.youtube.com/@NMIXXOfficial",
      },
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
      groupSocials: {
        groupId: 3,
        youtubeUrl: "https://www.youtube.com/channel/UC9GtSLeksfK4yuJ_g1lgQbg",
      },
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
      groupSocials: {
        groupId: 4,
        youtubeUrl: "https://www.youtube.com/@NewJeans_official",
      },
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
      groupSocials: {
        groupId: 5,
        youtubeUrl: "https://www.youtube.com/channel/UCritGVo7pLJLUS8wEu32vow",
      },
    },
    userUuid: "user-uuid-5",
    rank: 5,
    notes: "Fifth favorite group",
    logoUrl: "/images/logos/gidle-logo.jpg",
  },
];
