import React, { useContext } from 'react';
import { DarkModeContext } from './App';

function Header() {

    const context = useContext(DarkModeContext)
    const {isDark} = context;

    return(

        <header 
            className="header"
            style={
                { 
                    backgroundColor: isDark? 'black' : 'lightgray',
                    color: isDark? 'white' : 'black' 
                }
            }
        >
               <h1>Ohgiraffers 세상에 오신 걸 환영합니다!!!</h1> 
        </header>

    );

}

export default Header;