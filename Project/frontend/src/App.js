import {
  BrowserRouter as Router,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom"

import { library } from '@fortawesome/fontawesome-svg-core'
import {faSearch,faCartShopping,faLock,faKey,faSignIn,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import './CSS/Login.css'

import Header from "./Components/Public/Header"
import Home from "./Components/Home/Home"
import Footer from "./Components/Public/Footer"
import SignIn from "./Components/SignIn/SignIn"
import Register from "./Components/Register/Register"

import data from "./data/data"

library.add(faSearch,faCartShopping,faLock,faKey,faEnvelope,faSignIn,faFacebookF,faTwitter,faLinkedinIn,faUser)

function App() {
  function callbackFunction(childData){

    // data.Skills.map((skill)=>{
    //   if(skill.Area===childData){
    //     return console.log("Tim thay san pham")
    //   }
    //   else{
    //     return console.log("Khong tim thay san pham")
    //   }
    // })
    var check =data.Skills.find(e=>e.Area===childData)
    if(typeof check ==='undefined'){
      console.log("no")
    }
    else{
      console.log("Yes")
    }
  }
  return (
    <div className="App">
       <Router>
          <Header timKiem={callbackFunction} tuRoot={"hello"}/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/SignIn.html" element={<SignIn/>} />
            <Route path="/Register.html" element={<Register/>} />
          </Routes>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
