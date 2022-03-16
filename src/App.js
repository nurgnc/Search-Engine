// css
import GlobalStyles from "./styles/Global";
// router
import { Routes, Route } from "react-router-dom";
//context
import MainContextProvider from "./contexts/MainContextProvider";
//pages
import { Home, Results } from "./pages";

function App() {
  return (
    <MainContextProvider>
      <GlobalStyles />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/results"} element={<Results />} />
      </Routes>
    </MainContextProvider>
  );
}

export default App;
