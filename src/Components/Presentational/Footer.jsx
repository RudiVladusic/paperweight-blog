import {
  faGithub,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
        <div className="footer-desc-stack">
          <h2>Disclaimer</h2>
          <p>
            Since this is just a demo project there is no real authentication or
            storage - all the info is stored locally in your browser's local
            storage which means you can't share your posts with rest of the
            world 😢.
          </p>
          <p>
            But it also means that the data (blog posts and login info) you
            enter can't be read by anyone except you 😄 so go ahead and write
            whatever you want, wherever you want!
          </p>
        </div>

        <div className="footer-icon-stack">
          <div className="footer-heading">
            <h2>Social</h2>
          </div>
          <div className="footer-icon-stack__icons">
            <FontAwesomeIcon className="footer-icon" icon={faGithub} />
            <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
            <FontAwesomeIcon className="footer-icon" icon={faDiscord} />
            <FontAwesomeIcon className="footer-icon" icon={faInstagram} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
