/* eslint-disable @next/next/no-img-element */
import React from "react";
import axios from "axios";
import Rstyle from "../../styles/Newsevents.module.css";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Head from "next/head";

const baseURL = "http://localhost:5000/news";

export default function Recruitmentpage() {
  const [news, setNews] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setNews(response.data);
    });
  }, []);
  console.log(news);

  if (!news) return null;

  return (
    <>
      <Head>
        <title>{news[0].title}</title>
      </Head>
      <Navbar />
      <main>
        <div className={Rstyle.main}>
          <h1>{news[0].title}</h1>
        </div>
        <div className={Rstyle.main}>
          <h5>{news[0].date}</h5>
        </div>
        <div className={Rstyle.main}>
          <img src={news[0].img} alt="Recruitment Day" />
        </div>
        <div className={Rstyle.main}>
          <p className={Rstyle.paragraph}>{news[0].content}</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
