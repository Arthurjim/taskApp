import React from 'react';
import {useHistory} from 'react-router'
import '../styles/Componets/Header.css'
const Header = () => {
   const history = useHistory()
   const redirectHome =()=>{
    history.push('/')

   }
   return ( 
      <div className="Header">
         <h1 onClick={redirectHome}>TASK APP</h1>
         <span><i className="fas fa-bars"></i></span>
      </div>
    );
}
 
export default Header;
