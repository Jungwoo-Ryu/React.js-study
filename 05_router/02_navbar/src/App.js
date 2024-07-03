
import Layout from "./layouts/Layout";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Mypage from "./pages/Mypage";
import Login from "./pages/Login";
import Main from "./pages/Main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Main/>}/>
            <Route path='main' element={<Main/>}/>
            <Route path='mypage' element={<Mypage/>}/>
            <Route path='login' element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
        

    </div>
  );
}

export default App;
