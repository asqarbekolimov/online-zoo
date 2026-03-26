"use client";

import Link from "next/link";
import { Icons } from "@/components/icons";
import { MenuItems, SocialLinks } from "../../lib/constants";
import { usePathname } from "next/navigation";
import { useState } from "react";
import UserAvatar from "./user-avatar";

const Navbar = () => {
  const params = usePathname();
  const [isActiveMenu, setIsActiveMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsActiveMenu((prev) => !prev);
  };

  return (
    <>
      <header>
        <div className="header">
          <Link href="/">
            <span className="logo">
              <span>online</span>
              <span className="logo_zo">
                <span>ZO</span>
                <Icons.pandoLogo />
              </span>
            </span>
          </Link>

          <nav className={`navbar ${isActiveMenu && "active"}`}>
            <ul className="nav_items">
              {MenuItems.map((item) => (
                <li key={item.path}>
                  <Link
                    href={item.path}
                    className={`nav-link ${params === item.path && "nav-link--active"}`}
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <ul className="socials">
              {SocialLinks.map((link) => (
                <li key={link.link}>
                  <Link href={link.link}>{link.icon}</Link>
                </li>
              ))}
            </ul>

            <UserAvatar />
          </nav>

          <button
            className={`burger-menu ${isActiveMenu && "active"}`}
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <span className="burger-line"></span>
            <span className="burger-line"></span>
            <span className="burger-line"></span>
          </button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
