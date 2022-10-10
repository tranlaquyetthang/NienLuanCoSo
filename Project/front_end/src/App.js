import './App.css';
import './CSS/Login.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faStar,faSearch,faCartPlus} from '@fortawesome/free-solid-svg-icons'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Error404 from './Components/Error404'
import Home from './Components/Home';
library.add(fab,faStar,faSearch,faCartPlus)
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login.html" element={<Login />} />
          <Route path="/SignUp.html" element={<SignUp />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
