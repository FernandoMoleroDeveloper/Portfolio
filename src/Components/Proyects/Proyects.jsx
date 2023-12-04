import './Proyects.scss'
import { FormattedMessage } from "react-intl";

const Proyects = () => {
  

  return (
      <div id="proyects" className="proyects">
        <div>
        <h1><FormattedMessage id="general:proyects"/></h1>
            <div className="proyect__img">
              <img src="https://i.imgur.com/7h7yLQG.png" alt="proyect" />
            </div>
        </div>
        
        
      </div>
  )
};

export default Proyects;