"use client";
import { useState } from "react";
import { SearchContext } from "./contexts/SearchContext";
import styles from "./page.module.css";
import Header from "./pages/header/Header";
import ResultPage from "./pages/resultPage/ResultPage";
import SearchPage from "./pages/searchPage/SearchPage";

export default function Home() {
  const [search, setSearch] = useState<any>("");
  return (
    <main className={styles.main}>
      <SearchContext.Provider value={{ search, setSearch }}>
        <section>
          <Header />
        </section>
        <section className={styles.sectionDivision}>
          <SearchPage />
          <ResultPage />
        </section>
      </SearchContext.Provider>
    </main>
  );
}
