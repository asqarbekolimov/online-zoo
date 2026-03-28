import Link from "next/link";
import { Icons } from "@/components/icons";
import CustomButton from "../ui/button";
import { MenuItems, SocialLinks } from "../../lib/constants";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer_menu">
            <div className="footer_logos">
              <Icons.OnlineZooLogo />
              <Icons.YemDigitalIcon />
              <Icons.RsSchoolLogo />
            </div>

            <ul className="footer_menu-item">
              {MenuItems.map((item) => (
                <li key={item.path}>
                  <Link href={item.path} className="link">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <CustomButton variant="outlineWhite">
              <span className="text-button">donate for volunteers</span>
              <Icons.ArrowRight />
            </CustomButton>
          </div>

          <div className="line"></div>

          <div className="copyright-socials">
            <ul className="copyright">
              <li className="text-body">© 2021 DinaK</li>
              <li className="text-body">© Yem Digital</li>
              <li className="text-body">© RSSchool</li>
            </ul>
            <ul className="socials">
              {SocialLinks.map((link) => (
                <li key={link.link}>
                  <Link href={link.link} aria-label={link.name}>
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
