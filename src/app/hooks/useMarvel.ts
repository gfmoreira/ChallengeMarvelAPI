"use client";
import { useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";
import { SearchContext } from "@/app/contexts/SearchContext";

const useMarvel = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [blockRequest, setBlockRequest] = useState<boolean>(true);
  const [blockComicRequest, setBlockComicRequest] = useState<boolean>(true);
  const [blockRequestByCaractere, setBlockRequestByCaractere] =
    useState<boolean>(true);
  const [characterImage, setCharacterImage] = useState<string>("");
  const [offSet, setOffSet] = useState<any>("");
  const [toggle, setToggle] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [cleanList, setCleanList] = useState<boolean>(false);
  const [idComic, setIdComic] = useState<number>();
  const timeStamp = "moreira";
  const apikey = "e1617452b0f5dba807b26d025cb75e01";
  const md5 = "011df3685662ce0d345f9a855f1f97a2";

  const { search, setSearch } = useContext(SearchContext);

  const {
    data: characterFetchData,
    initiated: requestInitiated,
    finished: requestFinished,
    reset: resetRequest,
    error: requestError,
  } = useFetch({
    url: `https://gateway.marvel.com/v1/public/characters?name=${search}&ts=${timeStamp}&apikey=${apikey}&hash=${md5}`,
    block: blockRequest,
  });

  const { data: comicFetchData } = useFetch({
    url: `https://gateway.marvel.com/v1/public/characters/${idComic}/comics?&ts=${timeStamp}&apikey=${apikey}&hash=${md5}&limit=100`,
    block: blockComicRequest,
  });

  const {
    data: searchFetchFailData,
    initiated: requestFailDataInitiated,
    finished: requestFailDataFinished,
    reset: resetFailDataRequest,
    error: failDataError,
  } = useFetch({
    url: `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=${timeStamp}&apikey=${apikey}&hash=${md5}&offset=${offSet}&limit=12`,
    block: blockRequestByCaractere,
  });

  const characterData: any = characterFetchData;
  const searchFailData: any = searchFetchFailData;
  const comicData: any = comicFetchData;

  useEffect(() => {
    if (characterData == null) return;
    if (characterData?.data?.results?.length == 0) {
      setBlockRequestByCaractere(false);
      setCharacterImage("");
      setCleanList(false);
      setOffSet(0);
    }
    if (characterData?.data?.results[0]) {
      setToggle(false);
      setCharacterImage(
        characterData?.data?.results[0]?.thumbnail?.path +
          `.${characterData?.data?.results[0]?.thumbnail?.extension}`
      );
    }
  }, [characterData]);

  useEffect(() => {
    if (characterData) {
      setBlockRequest(true);
      setIdComic(characterData?.data?.results[0]?.id);
      setBlockComicRequest(false);
    }
  }, [characterData]);

  useEffect(() => {
    if (searchFailData) setBlockRequestByCaractere(true);
  }, [searchFailData]);

  useEffect(() => {
    if (requestError || failDataError) setError(true);
  }, [requestError, failDataError]);

  useEffect(() => {
    if (search) {
      setBlockRequestByCaractere(false);
      setCleanList(true);
      setToggle(true);
    }
  }, [search]);

  useEffect(() => {
    if (offSet || offSet === 0) {
      setBlockRequestByCaractere(false);
      setCleanList(false);
    }
  }, [offSet]);

  useEffect(() => {
    const loading =
      (requestInitiated && !requestFinished) ||
      (requestFailDataInitiated && !requestFailDataFinished);
    if (loading) return setLoading(true);
    if (!loading) {
      resetFailDataRequest();
      resetRequest();
      setLoading(false);
    }
  }, [
    requestInitiated,
    requestFinished,
    requestFailDataInitiated,
    requestFailDataFinished,
  ]);

  return {
    comicData,
    setOffSet,
    cleanList,
    search,
    toggle,
    setSearch,
    characterImage,
    characterData,
    loading,
    setBlockRequest,
    searchFailData,
    error,
  };
};

export default useMarvel;
