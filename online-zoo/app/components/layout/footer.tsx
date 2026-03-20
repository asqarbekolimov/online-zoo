import Link from "next/link";
import { Icons } from "@/components/icons";
import CustomButton from "../ui/button";

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
              <li>
                <Link href="/">About </Link>
              </li>
              <li>
                <Link href="/map">map </Link>
              </li>
              <li>
                <Link href="/zoo">zoos </Link>
              </li>
              <li>
                <Link href="/contact">contact us </Link>
              </li>
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
              <li>
                <Link href="#">
                  <Icons.youTubeLogo />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Icons.instagramLogo />
                </Link>
              </li>
              <li>
                <Link href="#">
                  <Icons.facebookLogo />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
