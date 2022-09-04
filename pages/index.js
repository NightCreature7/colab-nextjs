import Videocomponent from "../components/Videocomponent";
import Videocomponentsmallscreen from "../components/Videocomponentsmallscreens";
import Card from "../components/Card";
import aboutStyle from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import imgOne from "../public/aboutOne.png";
import imgTwo from "../public/aboutTwo.png";
import imgThree from "../public/aboutThree.png";
import imgFour from "../public/aboutFour.png";
import first from "../public/first.jpg";
import second from "../public/second.jpg";
import third from "../public/third-2.jpg";
import fourth from "../public/four.jpg";
import fifth from "../public/fifth.jpg";

function Home() {
  return (
    <>
      <Head>
        <title>Colab</title>
        <meta
          name="description"
          content="Colab is space, team and network of supports and expertise, all working to give your new or growing business the best chance of success."
        ></meta>
      </Head>
      <Navbar />
      <main>
        <Videocomponentsmallscreen />
        <Videocomponent />
        <div className={aboutStyle.aboutMain}>
          <span className={aboutStyle.span}>
            <p className={aboutStyle.paragraph}>
              Colab is space, team and network of supports and expertise, all
              working to give your new or growing business the best chance of
              success.
            </p>
          </span>
        </div>
        <div className={aboutStyle.row}>
          <div className={aboutStyle.column}>
            <div className={aboutStyle.spe}>
              <Image
                src={imgOne}
                className={aboutStyle.image}
                alt="CoLab About"
              />
            </div>
            <div className={aboutStyle.centered}>
              Business start-up support and expansion supports
            </div>
          </div>
          <div className={aboutStyle.column}>
            <div className={aboutStyle.spe}>
              <Image
                src={imgTwo}
                className={aboutStyle.image}
                alt="CoLab About"
              />
            </div>
            <div className={aboutStyle.centered}>
              Connect with a network of over 100 companies
            </div>
          </div>
          <div className={aboutStyle.column}>
            <div className={aboutStyle.spe}>
              <Image
                src={imgThree}
                className={aboutStyle.image}
                alt="CoLab About"
              />
            </div>
            <div className={aboutStyle.centered}>
              A culture of support and knowledge exchange
            </div>
          </div>
          <div className={aboutStyle.column}>
            <div className={aboutStyle.spe}>
              <Image
                src={imgFour}
                className={aboutStyle.image}
                alt="CoLab About"
              />
            </div>
            <div className={aboutStyle.centered}>
              Modern, flexible workspace and facilities
            </div>
          </div>
        </div>
        <div>
          <Card />
        </div>
        <div className={aboutStyle.container}>
          <div className={aboutStyle.containerSub}>
            <div className={aboutStyle.spec}>
              <Image
                src={first}
                className={aboutStyle.image}
                alt="CoLab Img One"
              />
            </div>
            <div className={aboutStyle.imgSection}>
              <h5 className={aboutStyle.sectheader}>COLAB CLIENTS</h5>
              <h2 className={aboutStyle.sectpara}>CoLab Clients</h2>
              <p>From individual start-ups to 20+ and going international...</p>
            </div>
          </div>
          <div className={aboutStyle.containerSubTwo}>
            <div className={aboutStyle.spec}>
              <Image
                src={second}
                className={aboutStyle.image}
                alt="CoLab Img Two"
              />
            </div>
            <div className={aboutStyle.imgSectionTwo}>
              <h5 className={aboutStyle.sectheader}>
                ABOUT COLAB - COLAB FACILITIES
              </h5>
              <h2 className={aboutStyle.sectpara}>CoLab Facilities</h2>
              <p>
                Flexible spaces, meeting rooms and the everything else you need.
              </p>
            </div>
          </div>
          <div className={aboutStyle.containerSubThree}>
            <div className={aboutStyle.spec}>
              <Image
                src={third}
                width="1393px"
                height="800px"
                alt="CoLab Img Three"
              />
            </div>
            <div className={aboutStyle.imgSectionThree}>
              <h5 className={aboutStyle.sectheader}>
                BUSINESS & LIFE IN DONEGAL
              </h5>
              <h2 className={aboutStyle.sectpara}>Business in Donegal</h2>
              <p>
                From high-tech multinationals to no-tech fresh air, Donegal is a
                fantastic location for businesses.
              </p>
            </div>
          </div>

          <div className={aboutStyle.containerSubFour}>
            <div className={aboutStyle.spec}>
              <Link href="/researchpage">
                <a>
                  <Image
                    src={fourth}
                    className={aboutStyle.image}
                    alt="CoLab Img Four"
                  />
                </a>
              </Link>
            </div>

            <div className={aboutStyle.imgSectionFour}>
              <h5 className={aboutStyle.sectheader}>RESEARCH</h5>
              <h2 className={aboutStyle.sectpara}>Research @ Colab</h2>
              <p>
                Learn more the range of research activities and opportunities in
                CoLab, and make sure to join us now.
              </p>
            </div>
          </div>
          <div className={aboutStyle.containerSubFive}>
            <div className={aboutStyle.spec}>
              <Image
                src={fifth}
                className={aboutStyle.image}
                alt="CoLab Img Five"
              />
            </div>
            <div className={aboutStyle.imgSectionFive}>
              <h5 className={aboutStyle.sectheader}>
                ABOUT COLAB - JOIN COLAB
              </h5>
              <h2 className={aboutStyle.sectpara}>Join Colab</h2>
              <p>
                Learn more about our office space options, arrange a virtual
                tour or a time to come in and visit CoLab.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Home;
