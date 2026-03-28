import { Icons } from "@/components/icons";
import { ReactNode } from "react";

export const MenuItems = [
  {
    name: "About",
    path: "/",
  },
  {
    name: "Map",
    path: "/map",
  },
  {
    name: "Zoos",
    path: "/zoo",
  },
  {
    name: "Contact us",
    path: "/contact",
  },
  {
    name: "Design",
    path: "https://www.figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project",
  },
];

export const SocialLinks = [
  {
    icon: <Icons.youTubeLogo />,
    link: "https://www.youtube.com/",
    name: "YouTube",
  },
  {
    icon: <Icons.instagramLogo />,
    link: "https://www.instagram.com/",
    name: "Instagram",
  },
  {
    icon: <Icons.facebookLogo />,
    link: "https://www.facebook.com/",
    name: "Facebook",
  },
];

export const AnimalsLocation: {
  coordinates: [number, number];
  icon: ReactNode;
}[] = [
  {
    coordinates: [-130, 55],
    icon: <Icons.EagleIcon />,
  },
  {
    coordinates: [-90, 65],
    icon: <Icons.Aligator />,
  },
  {
    coordinates: [-20, 50],
    icon: <Icons.LionIcon />,
  },
  {
    coordinates: [20, 45],
    icon: <Icons.GorilaIcon />,
  },
  {
    coordinates: [30, 15],
    icon: <Icons.LemurIcon />,
  },
  {
    coordinates: [80, 60],
    icon: <Icons.PandaIcon />,
  },
  {
    coordinates: [85, 35],
    icon: <Icons.TigerIcon />,
  },
  {
    coordinates: [115, 10],
    icon: <Icons.CaolaIcon />,
  },
];
