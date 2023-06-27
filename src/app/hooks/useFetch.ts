"use client";
import { useEffect, useState } from "react";

interface Params {
  url: string;
  method?: string;
  data?: any;
  headers?: any;
  block?: boolean;
  byHeader?: boolean;
}
export default function useFetch({
  url,
  method = "GET",
  data,
  headers = {},
  block = false,
  byHeader = false,
}: Params) {
  const [_data, setData] = useState(null);
  const [initiated, setInitiated] = useState(false);
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (block) {
      return;
    }
    if (!initiated) {
      setInitiated(true);
      return;
    }
    const params = {
      method,
      body: JSON.stringify(data),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        ...headers,
      },
    };
    if (method === "GET" || byHeader) {
      // @ts-expect-error
      delete params.body;
    }
    fetch(url, params)
      .then(async (response) => {
        setFinished(true);
        return await response.json();
      })
      .then(setData)
      .catch((error) => {
        return setError(error.message);
      });
  }, [initiated, data, block]);

  return {
    data: _data,
    initiated,
    error,
    headers,
    finished,
    reset: () => {
      setError(null);
      setFinished(false);
      setInitiated(false);
    },
  };
}
