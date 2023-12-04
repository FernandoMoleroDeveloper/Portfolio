import "./WhoIAm.scss";
import { FormattedMessage } from "react-intl";

const WhoIAm = () => {
  

  return (
      <div id="whoIAm" className="bio">
        <div>
        <h1><FormattedMessage id="general:about"/></h1>
            <div className="proyect__img">
              <img src="https://i.imgur.com/7h7yLQG.png" alt="proyect" />
            </div>
        </div>
        
        
      </div>
  )
};

export default WhoIAm;