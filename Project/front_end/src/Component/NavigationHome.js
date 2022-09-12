import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  Link
} from "react-router-dom";

function NavigationHome(props) {
  return (
    <nav className="navbar navbar-expand-sm d-flex justify-content-end">
        {/* Links */}
        <ul className="navbar-nav">
            <li className="nav-item">
                <button className='btn btn-primary btn-block'style={{backgroundColor:'white',color:'#4472C4'}}>
                    <Link className="nav-link" to="Login.html">SignIn</Link>
                </button>
              </li>
              &nbsp;
              <li className="nav-item">
                <button className='btn btn-primary btn-block'style={{backgroundColor:'white',color:'#4472C4'}}>
                    <Link className="nav-link" to="SignUp.html">SignUp</Link>
                </button>
              </li>
              <li className="nav-item d-flex align-items-center">
                <a className="nav-link d-flex align-items-end" href="!#">
                <FontAwesomeIcon className="textColor1 " icon={['fa', 'cart-plus']} style={{height:'25px'}}/>
                </a>
              </li>
          </ul>
    </nav>
  );
}

export default NavigationHome;