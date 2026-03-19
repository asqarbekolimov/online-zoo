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
                  <img src="/assets/images/instagram.svg" alt="instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="/assets/images/facebook.svg" alt="facebook" />
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="injected-svg"
                  data-src="https://cdn.hugeicons.com/icons/user-stroke-rounded.svg?v=1.0.0"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  role="img"
                  color="currentColor"
                >
                  <path
                    d="M17 8.5C17 5.73858 14.7614 3.5 12 3.5C9.23858 3.5 7 5.73858 7 8.5C7 11.2614 9.23858 13.5 12 13.5C14.7614 13.5 17 11.2614 17 8.5Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M19 20.5C19 16.634 15.866 13.5 12 13.5C8.13401 13.5 5 16.634 5 20.5"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
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
