import { useEffect, useState } from "react";

export const useFetch = (url: string, dependencies: any[] = []) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    fetch(url, { signal: abortController.signal })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        setIsLoading(false);
        setError(null);
        setData(data);
      })
      .catch((error) => {
        setIsLoading(false);
        setError(error.message);
        setData(undefined);
      });

    return () => abortController.abort();
  }, [url, ...dependencies]);

  return [data, isLoading, error] as const;
};
