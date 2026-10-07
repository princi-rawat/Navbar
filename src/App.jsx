// import Navbar from "./Component/Navbar/Navbar"
// import Main from "./Component/Main/Main"
// import Footer from "./Component/Footer/Footer"
// import A from "./Component/Small/A"
// import FetchData from "./Component/Button/FetchData"
import Home from "./Component/Conditional/Home"
import Nav from "./Component/Navbar/Nav";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Component/Navbar/Home";
import About from "./Component/Navbar/About";
import Service from "./Component/Navbar/Service";
import Contact from "./Component/Navbar/Contact";
const App = () => {
  return (
    <div> 
        <BrowserRouter>
          <Nav></Nav>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/service' element={<Service/>} />
            <Route path='/contact' element={<Contact/>} />
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App