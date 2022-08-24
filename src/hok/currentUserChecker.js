import { useEffect } from "react";
import useFetch from "../hooks/useFetch";

import useLocalStorage from "../hooks/useLocalStorage";

const CurrentUserChecker = ({ children }) => {
  const { response, doFetch } = useFetch("token");
  const [, setToken] = useLocalStorage("token");

  useEffect(() => {
    doFetch();
  }, [doFetch]);

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(response.token);
  }, [response, setToken]);

  return children;
};

export default CurrentUserChecker;
