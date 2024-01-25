import SliderLogos from "../SliderLogos/SliderLogos";
import TerminalText from "../TerminalText/TerminalText";
import "./WhoIAm.scss";
import { FormattedMessage } from "react-intl";

const WhoIAm = () => {
  

  return (
      <div id="whoIAm" className="bio">
        <div className="bio__title">
        <h1><FormattedMessage  id="general:about"/></h1>
        </div>
        <div>
        <TerminalText></TerminalText>
        </div>
        <div className="bio__slider">
          <SliderLogos></SliderLogos>
        </div>
        
      </div>
  )
};

export default WhoIAm;