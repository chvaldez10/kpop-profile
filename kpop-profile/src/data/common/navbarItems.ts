import { NavItem } from "@/types/shared";

export const NAV_ITEMS: Array<NavItem> = [
  {
    label: "K-Pop",
    children: [
      {
        label: "K-Pop Idols",
        subLabel: "Explore K-Pop idols",
        href: "#",
      },
      {
        label: "K-Pop Groups",
        subLabel: "Explore K-Pop groups",
        href: "#",
      },
    ],
  },
  {
    label: "Case Studies",
    children: [
      {
        label: "Why People Like K-Pop?",
        subLabel: "Why people like K-Pop",
        href: "#",
      },
      {
        label: "K-Pop Data Analysis",
        subLabel: "K-Pop data analysis",
        href: "#",
      },
    ],
  },
  {
    label: "K-Pop News",
    href: "#",
  },
  {
    label: "K-Pop Events",
    href: "#",
  },
];
