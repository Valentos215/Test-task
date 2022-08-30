import React, { useCallback, useState } from "react";
import "./App.scss";
import Skeleton from "./components/Description/Skeleton";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import { CurrentUserProvider } from "./contexts/currentUserContext";
import CurrentUserChecker from "./hok/currentUserChecker";
import useLocalStorage from "./hooks/useLocalStorage";

const Description = React.lazy(
  () => import("./components/Description/Description")
);

const App = () => {
  const [auth] = useLocalStorage("auth");
  const [isSignedUp, setIsSignedUp] = useState(!!auth);
  const doSignedUp = useCallback(() => {
    setIsSignedUp(true);
  }, []);

  return (
    <div className="app-wrapper">
      <CurrentUserProvider>
        <CurrentUserChecker>
          <Header />
          <React.Suspense fallback={<Skeleton />}>
            <Description />
          </React.Suspense>
          <Users isSignedUp={isSignedUp} />
          <Form doSignedUp={doSignedUp} />
        </CurrentUserChecker>
      </CurrentUserProvider>
    </div>
  );
};

export default App;
