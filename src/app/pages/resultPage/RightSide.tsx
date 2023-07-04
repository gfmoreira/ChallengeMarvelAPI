import useMarvel from "@/app/hooks/useMarvel";
import Image from "next/image";
import { Container } from "./RightSide.styles";
import Loader from "@/app/components/Loader/Loader";

export default function RightSide() {
  const {
    characterData,
    search,
    loading,
    setOffSet,
    setSelectedCharacter,
    setIdComic,
  } = useMarvel();

  return (
    <Container>
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
          {characterData ? (
            <div>
              <p className="marvel-result-text">
                We have {characterData?.data?.total} results for this search...
              </p>
              <div className="wrapper">
                {characterData?.data?.results.map((inside: any) => {
                  return (
                    <div key={`context-marvel-${inside?.name}`}>
                      <div className="marvel-list-pre-button">
                        <button
                          className="marvel-list-button"
                          onClick={() => {
                            setSelectedCharacter(inside?.id);
                            setIdComic(inside?.id);
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
          {characterData ? (
            <div className="pagination-button-align">
              <button
                disabled={characterData?.data?.offset == 0}
                className="pagination-button"
                onClick={() => setOffSet(characterData?.data?.offset - 12)}
              >
                Previous Page
              </button>
              <button
                disabled={
                  characterData?.data?.offset > characterData?.data?.total ||
                  characterData?.data?.count < 12
                }
                className="pagination-button"
                onClick={() => setOffSet(characterData?.data?.offset + 12)}
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
