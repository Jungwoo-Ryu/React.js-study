import {NavLink} from 'react-router-dom'

function Navbar(){

    const activeStyle = {
        backgroundColor : 'orange'
    }

    return(

        // <div>
        //     <ul>
        //         <li><a href={"/"}>HOME</a></li>
        //         <li><a href={"/mypage"}>MY PAGE</a></li>
        //         <li><a href={"/login"}>LOGIN PAGE</a></li>
        //     </ul>
        // </div>

        // <div>
        //     <ul>
        //         <li><Link to="/">HOME</Link> </li>
        //         <li><Link to="/mypage">MY PAGE</Link></li>
        //         <li><Link to="/login">LOGIN PAGE</Link></li>
        //     </ul>
        // </div>
        <div>
            <ul>
                <li><NavLink to="/" style={({isActive}) => isActive ? activeStyle : undefined}>HOME</NavLink> </li>
                <li><NavLink to="/mypage" style={({isActive}) => isActive ? activeStyle : undefined}>MY PAGE</NavLink></li>
                <li><NavLink to="/login" style={({isActive}) => isActive ? activeStyle : undefined}>LOGIN PAGE</NavLink></li>
            </ul>
        </div>
    );
}
export default Navbar;