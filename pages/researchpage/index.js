import imgOne from "../../public/research.jpg";
import researchStyle from "../../styles/Researchpage.module.css";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Head from "next/head";

function Researchpage() {
  return (
    <>
      <Head>
        <title>CoLab Research</title>
      </Head>
      <Navbar />
      <main>
        <Image
          className={researchStyle.image}
          src={imgOne}
          alt="CoLab Research"
        />
        <div className={researchStyle.divup}>
          <div className={researchStyle.divupleft}>
            <h4 className={researchStyle.divuptext}>Research @ CoLab</h4>
          </div>
          <div className={researchStyle.divupright}>
            <FaArrowRight />
          </div>
        </div>
        <div className={researchStyle.divmain}>
          <div className={researchStyle.divmiddle}>
            <h2 className={researchStyle.divmiddleheader}>Research @ CoLab</h2>
            <p className={researchStyle.divmiddleparagraph}>
              CoLab has become a hub for academic, transdisciplinary and
              translational research thanks to its collocation with LYIT.
            </p>
            <p className={researchStyle.divmiddleparagraphtwo}>
              One of the benefits of basing your new or growing business in the
              CoLab is our strong connection with LYIT. Several PhD researchers
              are based on the CoLab along with the Wisar and The Bryden Centre
              research groups.
            </p>
            <p className={researchStyle.divmiddleparagraphthree}>
              Find out more about the strong research ethos at LYIT.
            </p>
          </div>
          <div className={researchStyle.divmiddletwo}>
            <div className={researchStyle.divupzero}>
              <div className={researchStyle.divupleftzero}>
                <h4 className={researchStyle.divuptextzero}>
                  Research @ CoLab
                </h4>
              </div>
              <div className={researchStyle.divuprightzero}>
                <FaArrowRight />
              </div>
            </div>
            <div className={researchStyle.divupone}>
              <div className={researchStyle.divupleftone}>
                <h4 className={researchStyle.divuptextone}>
                  Collaborate with LYIT
                </h4>
              </div>
              <div className={researchStyle.divuprightone}>
                <FaArrowRight />
              </div>
            </div>
            <div className={researchStyle.divuptwo}>
              <div className={researchStyle.divuplefttwo}>
                <h4 className={researchStyle.divuptexttwo}>
                  Research & Innovation Funding
                </h4>
              </div>
              <div className={researchStyle.divuprighttwo}>
                <FaArrowRight />
              </div>
            </div>
            <div className={researchStyle.divupthree}>
              <div className={researchStyle.divupleftthree}>
                <h4 className={researchStyle.divuptextthree}>WiSAR Labs</h4>
              </div>
              <div className={researchStyle.divuprightthree}>
                <FaArrowRight />
              </div>
            </div>
            <div className={researchStyle.divupfour}>
              <div className={researchStyle.divupleftfour}>
                <h4 className={researchStyle.divuptextfour}>
                  The Bryden Centre
                </h4>
              </div>
              <div className={researchStyle.divuprightfour}>
                <FaArrowRight />
              </div>
            </div>
            <div className={researchStyle.divupfive}>
              <div className={researchStyle.divupleftfive}>
                <h4 className={researchStyle.divuptextfive}>DICE</h4>
              </div>
              <div className={researchStyle.divuprightfive}>
                <FaArrowRight />
              </div>
            </div>
            <div className={researchStyle.divupsix}>
              <div className={researchStyle.divupleftsix}>
                <h4 className={researchStyle.divuptextsix}>
                  Technology Gateway
                </h4>
              </div>
              <div className={researchStyle.divuprightsix}>
                <FaArrowRight />
              </div>
            </div>
            <div className={researchStyle.divupseven}>
              <div className={researchStyle.divupleftseven}>
                <h4 className={researchStyle.divuptextseven}>Erasmus+</h4>
              </div>
              <div className={researchStyle.divuprightseven}>
                <FaArrowRight />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}

export default Researchpage;
