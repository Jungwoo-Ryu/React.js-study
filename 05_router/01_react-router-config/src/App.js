import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import About from "./pages/About";


/*
  라우팅
    - 어떤 요청을 어디로 안내 및 매핑을 할 것인지를 정해놓고 진행하는 것.
    - 리액트 에서는 요청에 따라 요청에 매핑이 된 컴포넌트를 렌더링 한다.

  BrowserRouter
  - 라우팅이 필요한 컴포넌트들을 감싸는 컴포넌트
  Routes
  - Route 들을 묶어주는 단위(컴포넌트)
  Route
  - url 요청 주소와 컴포넌트를 매핑 해주는 단위 (컴포넌트)
*/
function App() {

  /** */
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Main/>}/> */}
          <Route index element={<Main/>} />
          <Route path={'/about'} element={<About/>} />
          <Route path={'/menu'} element={<Menu/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
