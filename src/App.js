// css
import GlobalStyles from './styles/Global';
// router
import { Routes, Route } from 'react-router-dom';
//pages
import {Home, Results} from './pages'

function App() {
  return (
    < >
      <GlobalStyles />
      <Routes>
        <Route path={"/"} element={<Home />}/>
        <Route path={"/results"} element={<Results />}/>
      </Routes>
    </>
  );
}

export default App;
