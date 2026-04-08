import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import ScrollToTop from "./ScrollToTop";
import Header from './components/Navbar';
import Footer from './components/footer';
import About from './pages/about';
import Home from './pages/Home';
import Service from './pages/Service'; 
import SingleService from './pages/SingleService';
import './custom.css';
import Privacy from './pages/privacy'; 

 
 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
       <ScrollToTop/>
        <Header />
        <Routes>
         
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Service" element={<Service />} />
          <Route path="/service-detail/:id" element={<SingleService />} />
          <Route path="/privacy" element={<Privacy />} />
           
        </Routes>
        <Footer />
      </BrowserRouter>


    </>
  )
}

export default App
