import "./App.css";
import HomePage from "./pages/HomePage";
import SplashPage from "./pages/SplashPage";
import { Fragment, useState } from "react";

function App() {
  const [appVisible, setAppVisible] = useState<boolean>(false);

  const openApp = () => {
    setAppVisible(true);
  };

  const closeApp = () => {
    setAppVisible(false);
  };
  return (
    <Fragment>
      {appVisible ? <HomePage onQuit={closeApp} /> : <SplashPage onOpen={openApp} />}
    </Fragment>
  );
}

export default App;
