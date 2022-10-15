import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom"
import { useState } from "react"

import { library } from '@fortawesome/fontawesome-svg-core'
import {faSearch,faCartShopping,faLock,faKey,faSignIn,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './CSS/Login.css'

import Header from "./Components/Public/Header"
import Home from "./Components/Home/Home"
import Footer from "./Components/Public/Footer"
import SignIn from "./Components/SignIn/SignIn"
import Register from "./Components/Register/Register"
import ProductDetails from "./Components/Products/ProductDetails"

library.add(faSearch,faCartShopping,faLock,faKey,faEnvelope,faSignIn,faFacebookF,faTwitter,faLinkedinIn,faUser)


function App() {
  //tim kiem san pham
  const [valueTimKiem,setValueTK]=useState("")
  const [searchParam]=useState(["tenSanPham"])
  function setValueTimKiem(childData){
    setValueTK(childData)
  }
  //tim kiem san pham
  return (
    <div className="App">
       <Router>
          <Header getValue={setValueTimKiem} searchParam={valueTimKiem}/>
          <Routes>
            <Route exact path="/" element={<Home kiemTra={valueTimKiem} searchParam={searchParam}/>} />
            <Route path="/SignIn.html" element={<SignIn/>} />
            <Route path="/Register.html" element={<Register/>} />
            <Route path="/products/:slug-:productId.html" element={<ProductDetails/>}/>
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
