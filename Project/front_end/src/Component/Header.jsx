import {
  Link
} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SearchForm from './SearchForm';
import NavigationHome from './NavigationHome';

function Header(props) {
  return (
    <div className="container-fluid">
              <div className="row">
                <div className="col-md-3 d-flex justify-content-start" >
                  <Link className="text-decoration-none text-dark" to='/'>&nbsp;&nbsp;&nbsp;<FontAwesomeIcon className="textColor1" icon={['fab', 'usb']} style={{height:'50px'}}/><br></br>Tech-Shop</Link>
                </div>
                <SearchForm/>
                <div className="col-md-3">
                  <NavigationHome/>
                </div>
              </div>
    </div>
  );
}

export default Header;