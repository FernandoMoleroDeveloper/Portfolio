import { FormattedMessage } from 'react-intl';
import './TerminalText.scss'

const TerminalText = () => {
  

  return (
    <div className="container">
    <div className="terminal_toolbar">
      <div className="butt">
        <button className="btn btn-color"></button>
        <button className="btn"></button>
        <button className="btn"></button>
      </div>
      <p className="user">00FernandoMolero@admin: ~</p>
      <div className="add_tab">+</div>
    </div>
    <div className="terminal_body">
      <div className="terminal_prompt">
        <span className="terminal_user">00FernandoMolero@admin:</span>
        <span className="terminal_location">~</span>
        <span className="terminal_bling">$</span>
        <span className="terminal_cursor"></span>
      </div>
      <div className="terminal_output">
        <p className="output_text"><FormattedMessage id="text:who"></FormattedMessage></p>
      </div>
      <div className="terminal_input">
        <input placeholder="Type a command..." className="input_text" type="text" />
      </div>
    </div>
  </div>
  
  )
};

export default TerminalText;