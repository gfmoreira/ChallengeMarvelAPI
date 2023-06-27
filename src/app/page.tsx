"use client";
import styles from "./page.module.css";
import SearchPage from "./pages/searchPage/SearchPage";

export default function Home() {
  return (
    <main className={styles.main}>
      <SearchPage />
    </main>
  );
}
