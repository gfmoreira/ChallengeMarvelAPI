import useMarvel from "@/app/hooks/useMarvel";
import { useState } from "react";
import Image from "next/image";
import { Container } from "./ResultPage.styles";
import Loader from "@/app/components/Loader/Loader";

export default function ResultPage() {
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
    setOffSet,
  } = useMarvel();

  return (
    <Container>
      {error ? (
        <div>Ops... Something went wrong, please refresh the page</div>
      ) : null}
      {loading ? <Loader /> : null}
      <section>
        <div className="marvel-description">
          {!search ? (
            <div>
              <p className="marvel-welcome-title">
                <b>Welcome to Marvel Search !</b>
              </p>
              <p className="marvel-welcome">
                Here you can search for information about your Hero or Villain
                :) Feel at home and test our application!
              </p>
              <hr></hr>
            </div>
          ) : null}

          {searchFailData ? (
            <div>
              <p className="marvel-result-text">
                We have {searchFailData?.data?.total} results for this search...
              </p>
              <div className="wrapper">
                {searchFailData?.data?.results.map((inside: any) => {
                  return (
                    <div key={`context-marvel-${inside?.name}`}>
                      <div className="marvel-list-pre-button">
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
                })}
              </div>
            </div>
          ) : null}
          {searchFailData && !cleanList ? (
            <div className="pagination-button-align">
              <button
                disabled={searchFailData?.data?.offset == 0}
                className="pagination-button"
                onClick={() => setOffSet(searchFailData?.data?.offset - 12)}
              >
                Previous Page
              </button>
              <button
                disabled={
                  searchFailData?.data?.offset > searchFailData?.data?.total ||
                  searchFailData?.data?.count < 12
                }
                className="pagination-button"
                onClick={() => setOffSet(searchFailData?.data?.offset + 12)}
              >
                Next Page
              </button>
            </div>
          ) : null}
        </div>
      </section>
    </Container>
  );
}
