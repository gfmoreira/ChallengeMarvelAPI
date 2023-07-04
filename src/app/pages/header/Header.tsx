import Image from "next/image";
import { Container } from "./Header.styles";
import teste from "../../../../public/assets/img/marvel-logo2.jpg";
import { useContext, useState } from "react";
import useMarvel from "@/app/hooks/useMarvel";
import { SearchContext } from "@/app/contexts/SearchContext";

export default function Header() {
  const [heroeSearch, setHeroeSearch] = useState<string>("");
  const { setSearch } = useContext(SearchContext);

  return (
    <Container>
      <div className="container-box">
        <div className="marvel-header">
          <Image
            className="logo-img"
            src={teste || ""}
            alt=""
            width={200}
            height={82}
          />
        </div>
        <div className="">
          <input
            className="search-input"
            placeholder="research a character..."
            type="text"
            onChange={(event) => setHeroeSearch(event.target.value)}
          />
          <button
            className="search-button"
            onClick={() => {
              setSearch(heroeSearch);
            }}
          >
            Search
          </button>
        </div>
      </div>
    </Container>
  );
}
