import useMarvel from "@/app/hooks/useMarvel";
import { useState } from "react";
import Image from "next/image";
import { Container } from "./SearchPage.styles";
import Loader from "@/app/components/Loader/Loader";

export default function SearchPage() {
  const [heroeSearch, setHeroeSearch] = useState("");
  const {
    characterData,
    characterImage,
    setSearch,
    toggle,
    searchFailData,
    search,
    loading,
  } = useMarvel(() => {});

  return (
    <Container>
      {loading ? <Loader /> : null}
      <section>
        {toggle ? (
          <div>
            Eita! Talvez {search} seja um heroi ou vilão novo e não esta em
            nosso registros, mas, temos outros {searchFailData?.data?.total} com
            a mesma inicial, posso te mostrar?
            <button onClick={() => ""}>Abrir Lista</button>
          </div>
        ) : null}

        <input
          type="text"
          onChange={(event) => setHeroeSearch(event.target.value)}
          className="mb-2 text-black"
        />
        <button
          className="text-stone-900"
          onClick={() => {
            setSearch(heroeSearch);
          }}
        >
          Search
        </button>
        <div>
          <b>{characterData?.data?.results[0]?.name}</b>
        </div>
        <div>
          <b>Description: </b>
          {characterData?.data?.results[0]?.description == ""
            ? "Confidential"
            : characterData?.data?.results[0]?.description}
        </div>
        <div>
          {characterImage ? (
            <Image
              className="avatar"
              src={characterImage || ""}
              alt=""
              width={150}
              height={150}
            />
          ) : null}
        </div>
      </section>
    </Container>
  );
}
