import { CurrentUserContext } from "./../contexts/currentUserContext";
import { useContext, useEffect } from "react";
import useFetch from "../hooks/useFetch";

import useLocalStorage from "../hooks/useLocalStorage";

const CurrentUserChecker = ({ children }) => {
  const { response, doFetch } = useFetch("token");
  const [auth] = useLocalStorage("auth");
  const [, setToken] = useContext(CurrentUserContext);

  useEffect(() => {
    if (auth) {
      return;
    }
    doFetch();
  }, [auth, doFetch]);

  useEffect(() => {
    if (!response) {
      return;
    }
    setToken(response.token);
  }, [response, setToken]);

  return children;
};

export default CurrentUserChecker;
