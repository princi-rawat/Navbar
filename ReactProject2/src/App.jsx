import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Nav from "./Component/Nav"
import About from "./Component/About"
import CreateUser from "./Component/CreateUser"
import Logo from "./Component/Logo"
import Home from "./Component/Home"
import AllUser from "./Component/AllUser"
import Login from "./Component/Login"
import SignUp from "./Component/SignUp"

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/alluser" element={<AllUser />}></Route>
          <Route path="/createuser" element={<CreateUser />}></Route>
          <Route path="/logo" element={<Logo />}></Route>
          <Route path="/nav" element={<Nav />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App