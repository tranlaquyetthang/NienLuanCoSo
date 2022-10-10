import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Footer from './Components/Public/Footer'
import Header from './Components/Home/Header'
import Error404 from './Components/Error404'
import Home from './Components/Home/Home';
import TopBar from './Components/TopBar';
import { useState } from 'react';
import HeaderP from './Components/Public/HeaderP';
function App() {
  const [count, setCount] = useState(1);
  
  return (
    <div className="App">
     
      <BrowserRouter>
        <TopBar/>
        {count==1?<Header/>:<HeaderP/>}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
