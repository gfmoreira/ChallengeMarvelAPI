import useMarvel from "@/app/hooks/useMarvel";
import { useState } from "react";
import Image from "next/image";
import { Container } from "./SearchPage.styles";
import Loader from "@/app/components/Loader/Loader";

export default function SearchPage() {
  const [heroeSearch, setHeroeSearch] = useState<string>("");
  const {
    characterData,
    characterImage,
    setSearch,
    toggle,
    searchFailData,
    search,
    loading,
    error,
  } = useMarvel();

  return (
    <Container>
      {error ? (
        <div>Ops... Something went wrong, please refresh the page</div>
      ) : null}
      {loading ? <Loader /> : null}
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
          className="search-input"
        />
        <button
          className="search-button"
          onClick={() => {
            setSearch(heroeSearch);
          }}
        >
          Search
        </button>
        <hr></hr>
        <div>
          <b>{characterData?.data?.results[0]?.name}</b>
        </div>
        <div>
          {characterData?.data?.results[0]?.description == "" ? (
            <div>
              <b>Description: </b>
              Confidential
            </div>
          ) : (
            <div>
              <b>Description: </b>
              {characterData?.data?.results[0]?.description}
            </div>
          )}
        </div>
      </section>
    </Container>
  );
}
