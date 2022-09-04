import Link from "next/link";
import Image from "next/image";
import navStyles from "../../styles/Navbar.module.css";
import logo from "../../public/logo.png";
import Menuitems from "./Menuitems";
import Menuitemstwo from "./Menuitemstwo";

function Navbar() {
  return (
    <div className={navStyles.navOne}>
      <Link href="/" className={navStyles.linkStyle}>
        <a className={navStyles.linkStyle}>
          <Image
            className={navStyles.image}
            src={logo}
            width="144px"
            height="33px"
            alt="CoLab Logo"
          />
        </a>
      </Link>
      <div>
        <Menuitems />
        <Menuitemstwo />
      </div>
    </div>
  );
}

export default Navbar;
