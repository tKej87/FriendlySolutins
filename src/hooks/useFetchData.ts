import { useCallback } from "react";

const useFetchData = () => {
  const getData = useCallback((successHandler, errorHandler) => {
    fetch(`${process.env.PUBLIC_URL}data.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        successHandler(json);
      })
      .catch((err) => {
        errorHandler(err);
      });
  }, []);
  return { getData };
};

export default useFetchData;
