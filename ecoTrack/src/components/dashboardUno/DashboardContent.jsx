import { useEffect, useState } from "react";
import styles from "../../../styles/dashboardStyles/dashboardcontent.module.css";
export default function DashboardContent() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const bgImages = [
    {
      text: "Currency Devaluation: Naira devaluation under President Tinubu increased inflation from 34.8% in Dec 2024",
      image: "/images/Inflation tracking board.png",
    },
    {
      text: `Energy Costs: High electricity prices impact core inflation.

`,
      image: "/images/Inflation tracking board2.png",
    },
    {
      text: `Subsidy Removal: Ending fuel subsidies raised energy costs, driving inflation.

`,
      image: "/images/Inflation tracking board3.png",
    },
    {
      text: ` Food Prices: Food inflation (21.26% in April 2025) is a major contributor.

`,
      image: "/images/Inflation tracking board.png",
    },
    {
      text: `Forex Pressures: Persistent foreign exchange issues fuel price increases.

`,
      image: "/images/Inflation tracking board3.png",
    },
  ];

  // "/images/Inflation tracking board3.png",
  // "/images/Inflation tracking board.png",
  // "/images/Inflation tracking board2.png",
  // "/images/Inflation tracking board3.png",
  // "/images/Inflation tracking board.png",

  // useEffect(() => {
  //   async function fetchNews() {
  //     try {
  //       const response = await fetch(
  //         `https://newsapi.org/v2/everything?q=nigeria inflation OR nigeria economy&language=en&sortBy=publishedAt&apiKey=${
  //           import.meta.env.VITE_NEWSAPI_KEY
  //         }`
  //       );
  //       const data = await response.json();

  //       // const allowedIndices = [11, 51, 56, 80, 84, 5];
  //       if (data.status === "ok") {
  //         setNews(
  //           data.articles
  //             .filter((article) => article.title)
  //             .slice(0, 10)
  //             .map((article) => ({
  //               title: article.title,
  //             }))
  //         );
  //       } else {
  //         setNewsError("Failed to fetch news");
  //       }
  //     } catch (error) {
  //       setNewsError(`Error fetching news: ${error.message}`);
  //     }
  //   }
  //   fetchNews();
  // }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % bgImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [bgImages.text, bgImages.image]);

  // if (!news.length) return null;
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.overlay}></div>
        {bgImages.length > 0 && (
          <img
            className={styles.headerImage}
            src={bgImages[currentIndex].image}
            alt=""
          />
        )}

        {bgImages.length > 0 && (
          <div className={styles.headerText}>{bgImages[currentIndex].text}</div>
        )}
      </div>
    </main>
  );
}
