import { useEffect, useState } from "react";
import styles from "../../../styles/dashboardStyles/dashboardcontent.module.css";
export default function DashboardContent() {
  const [news, setNews] = useState([]);
  const [newsError, setNewsError] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const bgImages = [
    "/images/Inflation tracking board.png",
    "/images/Inflation tracking board2.png",
    "/images/Inflation tracking board3.png",
    "/images/Inflation tracking board.png",
    "/images/Inflation tracking board2.png",
    "/images/Inflation tracking board3.png",
    "/images/Inflation tracking board.png",
    "/images/Inflation tracking board2.png",
    "/images/Inflation tracking board3.png",
    "/images/Inflation tracking board.png",
  ];

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=nigeria inflation OR nigeria economy&language=en&sortBy=publishedAt&apiKey=${
            import.meta.env.VITE_NEWSAPI_KEY
          }`
        );
        const data = await response.json();
        console.log(data.articles);

        // const allowedIndices = [11, 51, 56, 80, 84, 5];
        if (data.status === "ok") {
          setNews(
            data.articles
              .filter((article) => article.title)
              .slice(0, 10)
              .map((article) => ({
                title: article.title,
              }))
          );
        } else {
          setNewsError("Failed to fetch news");
        }
      } catch (error) {
        setNewsError(`Error fetching news: ${error.message}`);
      }
    }
    fetchNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % news.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [news]);

  if (!news.length) return null;
  return (
    <main className={styles.container}>
      <div className={styles.imageContainer}>
        <div className={styles.overlay}></div>
        <img
          className={styles.headerImage}
          src={bgImages[currentIndex]}
          alt=""
        />
        {news.length > 0 && (
          <div className={styles.headerText}>{news[currentIndex].title}</div>
        )}
        {newsError && <div className={styles.error}>{newsError}</div>}
      </div>
    </main>
  );
}
