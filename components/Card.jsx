/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
import axios from "axios";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Cardstyle from "../styles/Card.module.css";
import Link from "next/link";

const baseURL = "http://localhost:5000/news";

export default function Card() {
  const [news, setNews] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNews(response.data);
    });
  }, []);

  if (!news) return null;

  return (
    <div className={Cardstyle.bg}>
      <h2 className={Cardstyle.header}>Latest News & Events</h2>
      <div className={Cardstyle.main}>
        <div className="carousel-container">
          <Carousel
            infiniteLoop
            autoPlay
            useKeyboardArrows
            centerMode
            dynamicHeight
          >
            <div>
              <Link href="/recruitmentpage">
                <a>
                  <div>
                    <img src={news[0].img} alt="Carousel - One" />

                    <p className="legend">{news[0].title}</p>
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/authenticcommunication">
                <a>
                  <div>
                    <img src={news[1].img} alt="Carousel - Two" />

                    <p className="legend">{news[1].title}</p>
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/adviceleaders">
                <a>
                  <div>
                    <img src={news[2].img} alt="Carousel - Three" />

                    <p className="legend">{news[2].title}</p>
                  </div>
                </a>
              </Link>
            </div>

            <div>
              <Link href="/femaleentrepreneur">
                <a>
                  <div>
                    <img src={news[3].img} alt="Carousel - Four" />

                    <p className="legend">{news[3].title}</p>
                  </div>
                </a>
              </Link>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
