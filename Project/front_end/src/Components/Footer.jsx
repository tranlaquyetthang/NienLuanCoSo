import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Footer(props) {
  return (
    <div className=" d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 button1">
          {/* Copyright */}
          <div className="text-white mb-3 mb-md-0">
            Copyright © 2020. All rights reserved.
          </div>
          {/* Copyright */}
          {/* Right */}
          <div>
            <a href="#!" className="text-white me-4">
                <FontAwesomeIcon icon={['fab', 'facebook']}/>
            </a>
            <a href="#!" className="text-white me-4">
                <FontAwesomeIcon icon={['fab', 'twitter']}/>
            </a>
            <a href="#!" className="text-white me-4">
                <FontAwesomeIcon icon={['fab', 'google']}/>
            </a>
            <a href="#!" className="text-white">
                <FontAwesomeIcon icon={['fab', 'linkedin']}/>
            </a>
          </div>
          {/* Right */}
    </div>
  );
}

export default Footer;
