import footerStyle from "../../styles/Footer.module.css";
import Image from "next/image";
import fb from "../../public/fb.png";
import lin from "../../public/lin.jpg";
import twitter from "../../public/twitter.png";
import insta from "../../public/insta.png";
import bottom from "../../public/bottom.png";

function Footer() {
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.main}>
        <h4 className={footerStyle.header}>POLICIES</h4>

        <h5 className={footerStyle.headersub}>Privacy Policy(GDPR)</h5>

        <h5 className={footerStyle.headersub}>Accessibility</h5>
      </div>
      <div className={footerStyle.mainleft}>
        <h4 className={footerStyle.header}>CONTACT US</h4>
        <h5 className={footerStyle.headersub}>+353 74 918 6702</h5>

        <h5 className={footerStyle.headersubblue}>info@colab.ie</h5>

        <h5 className={footerStyle.headersub}>
          CoLab, LYIT, Port Road, Letterkenny, Co.Donegal F92 C5XK
        </h5>
      </div>
      <div className={footerStyle.mainright}>
        <h4 className={footerStyle.header}>FOLLOW US</h4>
        <div className={footerStyle.bottomup}>
          <Image height="26.53px" width="26.53px" src={fb} alt="Facebook" />
          <Image height="26.53px" width="31.53px" src={lin} alt="LinkedIn" />
          <Image height="26.53px" width="31.53px" src={twitter} alt="Twitter" />
          <Image height="26.53px" width="31.53px" src={insta} alt="Instagram" />
        </div>
        <div className={footerStyle.bottom}>
          <Image
            height="104px"
            width="189px"
            src={bottom}
            alt="Atlantic Tech University"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
