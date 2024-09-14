export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface LeaderboardEntry {
  username: string;
  src: string;
}
