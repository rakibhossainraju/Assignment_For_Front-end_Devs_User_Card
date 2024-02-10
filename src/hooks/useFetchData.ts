import { useEffect, useState } from "react";

interface FetchDataResult<T> {
  data: T[];
  isLoading: boolean;
  error: Error | null;
}

const useFetchData = <T>(
  url: string,
  modifier?: string,
): FetchDataResult<T> => {
  const [fetchDataResult, setFetchDataResult] = useState<FetchDataResult<T>>({
    data: [],
    isLoading: false,
    error: null,
  });

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setFetchDataResult((prevResult) => ({
        ...prevResult,
        isLoading: true,
      }));

      try {
        const response = await fetch(url);
        if (!isMounted) return;
        if (!response.ok) {
          setFetchDataResult({
            data: [],
            isLoading: false,
            error: new Error("Failed to fetch data!!!"),
          });
          return;
        }
        const result = await response.json();
        if (isMounted) {
          setFetchDataResult({
            data: !modifier ? result : result[modifier],
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        if (isMounted) {
          setFetchDataResult((prevResult) => ({
            ...prevResult,
            isLoading: false,
            error: error as Error,
          }));
        }
      }
    };
    fetchData();
    return () => {
      isMounted = false;
    };
  }, [url]);

  return fetchDataResult;
};

export default useFetchData;
