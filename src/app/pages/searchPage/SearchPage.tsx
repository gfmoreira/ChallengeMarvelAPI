import useMarvel from "@/app/hooks/useMarvel";
import { useState } from "react";
import Image from "next/image";
import { Container } from "./SearchPage.styles";
import Loader from "@/app/components/Loader/Loader";

export default function SearchPage() {
  const {
    characterData,
    characterImage,
    setSearch,
    toggle,
    searchFailData,
    search,
    loading,
  } = useMarvel(() => {});
  const [search2, setSearch2] = useState("");
  const [showModal, setShowModal] = useState<boolean>(false);
  console.log(loading);
  return (
    <Container>
      {loading ? <Loader /> : null}
      <section>
        {toggle ? (
          <div>
            Eita! Talvez {search} seja um heroi ou vilão novo e não esta em
            nosso registros, mas, temos outros {searchFailData?.data?.total} com
            a mesma inicial, posso te mostrar?
            <button onClick={() => setShowModal(true)}>Abrir Lista</button>
          </div>
        ) : null}

        <input
          type="text"
          onChange={(event) => setSearch2(event.target.value)}
          className="mb-2 text-black"
        />
        <button
          className="text-stone-900"
          onClick={() => {
            setSearch(search2);
          }}
        >
          Search
        </button>
        <div>Name: {characterData?.data?.results[0]?.name}</div>
        <div>
          Description:
          {characterData?.data?.results[0]?.description == ""
            ? "Confidential"
            : characterData?.data?.results[0]?.description}
        </div>
        <div>
          <Image
            className="avatar"
            src={characterImage || ""}
            alt=""
            width={150}
            height={150}
          />
        </div>
      </section>
    </Container>
  );
}
