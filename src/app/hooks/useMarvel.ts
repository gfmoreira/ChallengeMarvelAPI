"use client";
import { useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";
import { SearchContext } from "@/app/contexts/SearchContext";

const useMarvel = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [blockRequest, setBlockRequest] = useState<boolean>(true);
  const [blockComicRequest, setBlockComicRequest] = useState<boolean>(true);
  const [blockSelectedCharacter, setBlockSelectedCharacter] =
    useState<boolean>(true);
  const [characterImage, setCharacterImage] = useState<string>("");
  const [offSet, setOffSet] = useState<any>("");
  const [toggle, setToggle] = useState<boolean>(true);
  const timeStamp = "moreira";
  const apikey = "e1617452b0f5dba807b26d025cb75e01";
  const md5 = "011df3685662ce0d345f9a855f1f97a2";

  const {
    search,
    selectedCharactere,
    setSelectedCharacter,
    idComic,
    setIdComic,
  } = useContext(SearchContext);

  const {
    data: characterFetchData,
    initiated: requestInitiated,
    finished: requestFinished,
    reset: resetRequest,
    error: requestError,
  } = useFetch({
    url: `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=${timeStamp}&apikey=${apikey}&hash=${md5}&offset=${offSet}&limit=12`,
    block: blockRequest,
  });

  const {
    data: selectedCharacterFetchData,
    initiated: selectedInitiated,
    finished: selectedFinished,
    reset: resetSelected,
  } = useFetch({
    url: `https://gateway.marvel.com/v1/public/characters/${selectedCharactere}?ts=${timeStamp}&apikey=${apikey}&hash=${md5}`,
    block: blockSelectedCharacter,
  });

  const {
    data: comicFetchData,
    initiated: comicFetchInitiated,
    finished: comicFetchFinished,
    reset: resetComicFetch,
  } = useFetch({
    url: `https://gateway.marvel.com/v1/public/characters/${idComic}/comics?ts=${timeStamp}&apikey=${apikey}&hash=${md5}&limit=100`,
    block: blockComicRequest,
  });

  const characterData: any = characterFetchData;
  const selectedCharacterInfo: any = selectedCharacterFetchData;
  const comicData: any = comicFetchData;

  useEffect(() => {
    if (selectedCharacterInfo == null) return;
    if (selectedCharacterInfo?.data?.results[0]) {
      setToggle(false);
      setBlockSelectedCharacter(true);
      setCharacterImage(
        selectedCharacterInfo?.data?.results[0]?.thumbnail?.path +
          `.${selectedCharacterInfo?.data?.results[0]?.thumbnail?.extension}`
      );
    }
  }, [selectedCharacterInfo]);

  useEffect(() => {
    if (characterData) setBlockRequest(true);
  }, [characterData]);

  useEffect(() => {
    if (comicData) setBlockComicRequest(true);
  }, [comicData]);

  useEffect(() => {
    if (idComic) setBlockComicRequest(false);
  }, [idComic]);

  useEffect(() => {
    if (search) setBlockRequest(false);
  }, [search]);

  useEffect(() => {
    if (selectedCharactere) setBlockSelectedCharacter(false);
  }, [selectedCharactere]);

  useEffect(() => {
    if (offSet || offSet === 0) setBlockRequest(false);
  }, [offSet]);

  useEffect(() => {
    const loading =
      (requestInitiated && !requestFinished) ||
      (selectedInitiated && !selectedFinished) ||
      (comicFetchInitiated && !comicFetchFinished);
    if (loading) return setLoading(true);
    if (!loading) {
      resetRequest();
      resetSelected();
      resetComicFetch();
      setLoading(false);
    }
  }, [
    requestInitiated,
    requestFinished,
    selectedInitiated,
    selectedFinished,
    comicFetchInitiated,
    comicFetchFinished,
  ]);

  return {
    selectedCharacterInfo,
    characterImage,
    toggle,
    loading,
    comicData,
    characterData,
    search,
    setOffSet,
    setSelectedCharacter,
    setIdComic,
  };
};

export default useMarvel;
