"use client";
import { useEffect, useState } from "react";
import useFetch from "./useFetch";

const useMarvel = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [blockRequest, setBlockRequest] = useState<boolean>(true);
  const [blockRequestByCaractere, setBlockRequestByCaractere] =
    useState<boolean>(true);
  const [characterImage, setCharacterImage] = useState<string>("");
  const [toggle, setToggle] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const timeStamp = "moreira";
  const apikey = "e1617452b0f5dba807b26d025cb75e01";
  const md5 = "011df3685662ce0d345f9a855f1f97a2";

  const {
    data: characterData,
    initiated: requestInitiated,
    finished: requestFinished,
    reset: resetRequest,
    error: requestError,
  } = useFetch({
    url: `https://gateway.marvel.com/v1/public/characters?name=${search.trim()}&ts=${timeStamp}&apikey=${apikey}&hash=${md5}`,
    block: blockRequest,
  });

  const {
    data: searchFailData,
    initiated: requestFailDataInitiated,
    finished: requestFailDataFinished,
    reset: resetFailDataRequest,
    error: failDataError,
  } = useFetch({
    url: `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search.substring(
      0,
      1
    )}&ts=${timeStamp}&apikey=${apikey}&hash=${md5}&offset=0`,
    block: blockRequestByCaractere,
  });

  useEffect(() => {
    if (characterData == null) return;
    if (characterData?.data?.results?.length == 0) {
      setBlockRequestByCaractere(false);
      setCharacterImage("");
      setToggle(true);
    }
    if (characterData?.data?.results[0]) {
      setCharacterImage(
        characterData?.data?.results[0]?.thumbnail?.path +
          `.${characterData?.data?.results[0]?.thumbnail?.extension}`
      );
    }
  }, [characterData]);

  useEffect(() => {
    if (characterData) setBlockRequest(true);
  }, [characterData]);

  useEffect(() => {
    if (searchFailData) setBlockRequestByCaractere(true);
  }, [searchFailData]);

  useEffect(() => {
    if (requestError || failDataError) setError(true);
  }, [requestError, failDataError]);

  useEffect(() => {
    if (search) {
      setBlockRequest(false);
      setToggle(false);
    }
  }, [search]);

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
