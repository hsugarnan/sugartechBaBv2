import { useRef, useState, useEffect } from 'react';
import './nav.css'
import sugartech from './sugartech.jpeg'
import {BrowserRouter as Router,Routes, Route, Link,Outlet } from 'react-router-dom';
import Footer from './footer';


function  Nav( {user} ){
    return(
      <div>
        <div className = "navbar">
         <div className="logo">
            <a target = "_blank" href="www.sugartech.page"><img src={ sugartech } alt="logo" /></a>
        </div>
         <div className = "pfpWrapper">
         </div>
         
        </div>
        <Outlet/>

        {/* <Footer/> */}
      </div>



    )
    


    

}


export default Nav