import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  LOG_IN_OUT } from '../redux/AuthSlice';

const Header = () => {
      const {isLoggedIn} = useSelector(state => state.auth);
      const dispatch = useDispatch();


      const HandleClick = () => {
          dispatch(LOG_IN_OUT())
      }

    return(
        <div className="navbar bg-dark text-white p-2 mb-5">
           <h1>MY APP</h1>
           <button onClick={HandleClick}>{isLoggedIn ? 'logOut': 'logIn' }</button>
        </div>
    )
}

export default Header;