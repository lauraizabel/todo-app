import React from "react";
import { LoadingProvider } from "./contexts/loading-context/loading-context";
import Routes from "./routes/routes";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <LoadingProvider>
        <GlobalStyle />
        <Routes />
      </LoadingProvider>
    </>
  );
}

export default App;
