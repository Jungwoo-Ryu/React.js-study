import React, { useContext } from 'react';
import { DarkModeContext } from './App';

function Content() {
    const context = useContext(DarkModeContext)
    const {isDark} = context;

    return(

        <div 
            className="content"
            style={{
                backgroundColor: isDark? 'gray' : 'white',
                color: isDark? 'white' : 'black'
            }}
        >
            <p>Content 영역입니다. 내용을 작성하세요</p>
        </div>

    );

}
export default Content;