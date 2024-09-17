export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export interface BoxProps {
  label: string;
  src: string;
}

export interface LeaderboardEntry extends BoxProps {
  rank: number;
  order?: { base: number; md: number };
}
