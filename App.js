
import React from 'react';
import './App.css';
import Login from './login.jsx'
import Nav from './navsugar.jsx'
import Footer from './footer';
import sugartech from './sugartech.jpeg'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import ExcelIntegration from './xlsx.jsx'
import {auth} from "./firebase/init.js"
import {BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


function App() {

  
  return (


    
    <Router>

      <Routes>
         <Route path="/" element={<Nav/>}>
          <Route index element={<Login />} />
          <Route path="/xlsx" element={<ExcelIntegration />} />
         </Route>

      </Routes>
    </Router>
  );
}

export default App;
