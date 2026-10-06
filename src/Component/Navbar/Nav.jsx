import React from 'react'
// import './navbar.css'
import {Link} from 'react-router-dom'
const Nav=()=>{
    return(
        <div className='nav-container'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/service'>Service</Link></li>
                <li><Link to='/contact'>Contact</Link></li>
            </ul>
        </div>
    )
}
export default Nav


// majorly projects make in react.
// vite is build tool
// cmd-> npm create vite@latest
// project name and package name should be same.
// node-modules folder helps in run to react projects.= np install
// cd-> command directory
// for closed the server ctrl+c.
// cd.. one folder out yani ek folder pichhe lekar jata hai.
// Es-6= import & export
// expression={}
// React js is a library & it's used to craete UI.
// Dom & v-Dom 
// in 2011, jordan walke made react.
// package means bundle 
// npm stands for node package manager.
// package.json Node.js / React project ki configuration file hoti 
//    hai. Isme project ki information, dependencies aur scripts store
//     hote hain or directory .
// component=function but function is calling and component is rendering.
// hw. arrow and normal function se 
// navbar wthout CSS
// main
// footer