import useMarvel from "@/app/hooks/useMarvel";
import Image from "next/image";
import { Container } from "./LeftSide.styles";
import Loader from "@/app/components/Loader/Loader";

export default function LeftSide() {
  const { selectedCharacterInfo, characterImage, toggle, loading, comicData } =
    useMarvel();

  return (
    <Container>
      {loading ? <Loader /> : null}
      <section className={`${!toggle ? null : "background-image-true"}`}>
        <div className="marvel-information">
          <div className="avatar">
            {characterImage ? (
              <Image
                className="avatar-img"
                src={characterImage || ""}
                alt=""
                width={300}
                height={300}
              />
            ) : null}
          </div>
          <div className="marvel-name">
            <b>{selectedCharacterInfo?.data?.results[0]?.name}</b>
          </div>
          <div className="marvel-description">
            {selectedCharacterInfo ? (
              <div>
                <p className="marvel-datas">
                  <b>Description: </b>
                  {selectedCharacterInfo?.data?.results[0]?.description
                    ? selectedCharacterInfo?.data?.results[0]?.description
                    : "No records..."}
                </p>
                <p className="marvel-datas-results">
                  <b>{`The ${selectedCharacterInfo?.data?.results[0]?.name} was involved in:`}</b>
                  <table>
                    <tr>
                      <th>Stories</th>
                      <th>Series</th>
                      <th>Events</th>
                      <th>Comics</th>
                    </tr>
                    <tr>
                      <td>
                        {
                          selectedCharacterInfo?.data?.results[0]?.stories
                            ?.available
                        }
                      </td>
                      <td>
                        {
                          selectedCharacterInfo?.data?.results[0]?.series
                            ?.available
                        }
                      </td>
                      <td>
                        {
                          selectedCharacterInfo?.data?.results[0]?.events
                            ?.available
                        }
                      </td>
                      <td>
                        {
                          selectedCharacterInfo?.data?.results[0]?.comics
                            ?.available
                        }
                      </td>
                    </tr>
                  </table>
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="marvel-comic-results pic-ctn">
          {comicData
            ? comicData?.data?.results.map((inside: any) => {
                return (
                  <div key={`context-marvel-${inside?.id}`}>
                    <div className="marvel-list-pre-button">
                      <button
                        className="marvel-list-button"
                        onClick={() => {
                          window.open(
                            `${inside?.urls[0]?.url}`,
                            "rel=noopener noreferrer"
                          );
                        }}
                      >
                        <div
                          key={`marvel_${inside?.title}`}
                          className="marvel-comic-list"
                        >
                          <Image
                            className="marvel-comic-list-image"
                            src={
                              inside?.thumbnail?.path +
                                `.${inside?.thumbnail?.extension}` || ""
                            }
                            alt=""
                            width={100}
                            height={152}
                          />
                        </div>
                      </button>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </section>
    </Container>
  );
}
