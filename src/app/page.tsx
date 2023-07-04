"use client";
import { useState } from "react";
import { SearchContext } from "./contexts/SearchContext";
import styles from "./page.module.css";
import Header from "./pages/header/Header";
import LeftSide from "./pages/searchPage/LeftSide";
import RightSide from "./pages/resultPage/RightSide";

export default function Home() {
  const [search, setSearch] = useState<any>("");
  const [selectedCharactere, setSelectedCharacter] = useState<any>("");
  const [idComic, setIdComic] = useState<any>("");
  return (
    <main className={styles.main}>
      <SearchContext.Provider
        value={{
          search,
          setSearch,
          selectedCharactere,
          setSelectedCharacter,
          idComic,
          setIdComic,
        }}
      >
        <section>
          <Header />
        </section>
        <section className={styles.sectionDivision}>
          <LeftSide />
          <RightSide />
        </section>
      </SearchContext.Provider>
    </main>
  );
}
