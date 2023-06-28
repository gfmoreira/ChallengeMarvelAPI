"use client";
import styles from "./page.module.css";
import ResultPage from "./pages/resultPage/ResultPage";
import SearchPage from "./pages/searchPage/SearchPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchPage />
      <ResultPage />
    </main>
  );
}
