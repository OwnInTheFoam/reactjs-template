// Thirdparty
import {Link} from 'react-router-dom';
// Styles
import './../styles/App.css';
import './../styles/Footer.css';

function Footer(){
  return(
    // <!-- Footer Container -->
    <footer>
    <div className="container">

      <div className="footer-container">
        <Link to="/"><img src={require("./../assets/logo.svg").default} alt="logo" className="footer-logo"/></Link>

        <div className="footer-links">
          <ul className="footer-links">
            {/* TODO complete */}
            {/* <li><Link to="/">FAQ</Link></li> */}
            {/* TODO complete */}
            {/* <li><Link to="/">Terms of Service</Link></li> */}
            {/* <li><Link to="/">Home</Link></li> */}
          </ul>
          <ul className="social-links">
            <li><a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer"><img src={require("./../assets/icon-twitter.svg").default} alt="twitter"/></a></li>
            <li><a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer"><img src={require("./../assets/icon-instagram.svg").default} alt="instagram"/></a></li>
            <li><a href="https://www.youtube.com/channel/" target="_blank" rel="noopener noreferrer"><img src={require("./../assets/icon-youtube.svg").default} alt="youtube"/></a></li>
            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={require("./../assets/icon-facebook.svg").default} alt="facebook"/></a></li>
          </ul>
        </div>
      </div>

    </div>
  </footer>
  )
}

export default Footer;
