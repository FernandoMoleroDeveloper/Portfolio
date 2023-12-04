import "./Footer.scss"
import { FormattedMessage } from "react-intl";

const Footer = () => {
  

  return (
      <div id="footer" className="footer">
        <div>
        <h1><FormattedMessage id="general:contact"/></h1>
            <div className="proyect__img">
              <img src="https://i.imgur.com/7h7yLQG.png" alt="proyect" />
            </div>
        </div>
        
        
      </div>
  )
};

export default Footer;