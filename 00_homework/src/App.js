import React, { useState, createContext } from 'react';
import Page from './Page';

export const DarkModeContext = createContext(null);
function App() {
  const [isDark, setIsDark] = useState(false);
  // const DarkModeContext = createContext(null);
            /*
                Provider 라는 녀석은 value 프로퍼티를 이용해서 하위 컴포넌트에게
                값을 전달한다. 
                이 때 값을 전달받을 수 있는 컴포넌트 수는 제한이 없다.
                해당 Provider 는 Context 이름으로부터 useContext 훅을 통해서 
                어느 컴포넌트던 간에 사용할 수 있게 된다. 
            */

  return (
  <DarkModeContext.Provider value={{isDark, setIsDark}}>
    <Page/>
  </DarkModeContext.Provider>);
}

export default App;
