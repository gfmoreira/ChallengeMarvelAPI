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
    cleanList,
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
        <div className="marvel-search-header">
          <Image
            className="marvel-logo"
            src={"/assets/img/america_logo.png"}
            alt=""
            width={100}
            height={100}
          />
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
        </div>
        <div className="marvel-name">
          <b>{characterData?.data?.results[0]?.name}</b>
        </div>
        <div className="marvel-description">
          {toggle ? (
            <div className="marvel-header">
              Eita! Talvez <b>{search}</b> seja um heroi ou vilão novo e não
              esta em nosso registros, mas, temos outros{" "}
              {searchFailData?.data?.total} com a mesma inicial, confira :)
              <hr></hr>
            </div>
          ) : null}
          {characterData ? (
            characterData?.data?.results[0]?.description == "" ? (
              <div>
                <b>Description: </b>
                Confidential
              </div>
            ) : characterData?.data?.results[0]?.description ? (
              <div>
                <b>Description: </b>
                {characterData?.data?.results[0]?.description}
              </div>
            ) : null
          ) : null}
          <div className="wrapper">
            {searchFailData && !cleanList
              ? searchFailData?.data?.results.map((inside: any) => {
                  return (
                    <div key={`context-marvel-${inside?.name}`}>
                      <div>
                        <button
                          className="marvel-list-button"
                          onClick={() => {
                            setSearch(inside?.name);
                          }}
                        >
                          <div
                            key={`marvel_${inside?.name}`}
                            className="marvel-list"
                          >
                            <Image
                              className="marvel-list-image"
                              src={
                                inside?.thumbnail?.path +
                                  `.${inside?.thumbnail?.extension}` || ""
                              }
                              alt=""
                              width={100}
                              height={100}
                            />
                            {inside?.name}
                          </div>
                        </button>
                      </div>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </section>
    </Container>
  );
}
