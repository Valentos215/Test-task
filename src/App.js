import React from "react";
import "./App.scss";
import Skeleton from "./components/Description/Skeleton";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Users from "./components/Users/Users";
import CurrentUserChecker from "./hok/currentUserChecker";

const Description = React.lazy(() =>
  import("./components/Description/Description")
);

function App() {
  return (
    <div className="app-wrapper">
      <CurrentUserChecker>
        <Header />
        <React.Suspense fallback={<Skeleton />}>
          <Description />
        </React.Suspense>
        <Users />
        <Form />
      </CurrentUserChecker>
    </div>
  );
}

export default App;
