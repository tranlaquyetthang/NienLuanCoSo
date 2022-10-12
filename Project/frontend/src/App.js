import Header from "./Components/Public/Header"
import { library } from '@fortawesome/fontawesome-svg-core'
import {faSearch,faCartShopping,faLock,faKey,faSignIn,faUser,faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { faFacebookF,faTwitter,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Footer from "./Components/Public/Footer"
import './CSS/Login.css'
import Register from "./Components/Register/Register"
library.add(faSearch,faCartShopping,faLock,faKey,faEnvelope,faSignIn,faFacebookF,faTwitter,faLinkedinIn,faUser)
function App() {
  return (
    <div className="App">
      <Header/>
      <Register/>
      <Footer/>
    </div>
  );
}

export default App;
