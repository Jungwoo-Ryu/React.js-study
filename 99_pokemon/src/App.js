import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Main from './pages/Main';
import Layout from './layouts/Layout';
import Pokemon from './pages/Pokemon';
function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='home' element={<Main/>}/>
            <Route path='pokemon' element={<Pokemon/>}/>
              {/* <Route index element={<Pokemon/>}/> */}
              {/* <Route path=":pokeCode" element={<PokeDetails/>}/> */}

          </Route>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
