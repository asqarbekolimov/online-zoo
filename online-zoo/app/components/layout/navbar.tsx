import Link from "next/link";
import React from "react";
import { Icons } from "@/components/icons";

const Navbar = () => {
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

          <nav className="navbar">
            <ul className="nav_items">
              <li>
                <a href="#" className="nav-link nav-link--active">
                  About
                </a>
              </li>
              <li>
                <a href="/pages/map.html" className="nav-link">
                  Map
                </a>
              </li>
              <li>
                <a href="/pages/zoo/panda.html" className="nav-link">
                  Zoos
                </a>
              </li>
              <li>
                <a href="/pages/contact.html" className="nav-link">
                  Contact us
                </a>
              </li>
              <li>
                <Link
                  href="https://www.figma.com/file/lnK11foY8Aoa6oOlDXovVN/Online-ZOO-Project"
                  className="nav-link"
                  target="_blank"
                >
                  Design
                </Link>
              </li>
            </ul>

            <ul className="socials">
              <li>
                <a href="#">
                  <Icons.youTubeLogo />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icons.instagramLogo />
                </a>
              </li>
              <li>
                <a href="#">
                  <Icons.facebookLogo />
                </a>
              </li>
            </ul>

            <div className="header__account">
              <button
                className="user__avatar"
                type="button"
                aria-label="Open user menu"
                aria-expanded="false"
              >
                <Icons.userAvatar />
                <span className="user__avatar-name"></span>
              </button>

              <div className="user-menu" hidden></div>
            </div>
          </nav>

          <button className="burger-menu" aria-label="Toggle menu">
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
