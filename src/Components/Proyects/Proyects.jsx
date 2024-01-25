import './Proyects.scss'
import { FormattedMessage } from "react-intl";

const Proyects = () => {
  

  return (
      <div id="proyects" className="proyects">
        <h1 className="proyects__title"><FormattedMessage id="general:proyects"/></h1>
        <div className="proyects__box">
        <div className="proyects__img">
            <p className="proyects__titleText">CLON DE TMDB</p>
              <a href="https://the-movie-maker.netlify.app" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/proyects/movie.png" alt="proyect" className="proyects__link" />
              </a>
              <div className="proyects__boxText"> 
                
                <p className="proyects__text">Proyecto de una plataforma en línea que sirve como una base de datos cinematográfica. Los usuarios pueden acceder a datos como sinopsis, reparto y más. Se puede seleccionar idioma e incluye un juego, empleo de la API de TMDB.</p>
                <p className="proyects__technoText"><FormattedMessage id="general:technologies" ></FormattedMessage></p>
                <div className="proyects__boxLogos">
                    <img className="proyects__logos" src="src/assets/LogosLeng/css3.png" />
                    <img className="proyects__logos" src="src/assets/LogosLeng/html5.png" />
                    <img className="proyects__logos" src="src/assets/LogosLeng/react.png" />
                    <img className="proyects__logos" src="src/assets/LogosLeng/nodejs.png" />
                    <img className="proyects__logos" src="src/assets/LogosLeng/sass.png" />
                </div>
              </div>
            </div>
            <div className="proyects__img">
              <p className="proyects__titleText">LA LIGA</p>
              <a href="https://laliga-front.onrender.com" target="_blank" rel="noopener noreferrer">
                <img src="src/assets/proyects/laliga.png" alt="proyect" className="proyects__link" />
              </a>
              <div className="proyects__boxText"> 
                
                <p className="proyects__text">Proyecto de una App Fullstack para la gestión y creación de ligas de fútbol. Registro de usuarios, seguimiento de partidos y clasificación. Totalmente personalizable con logos, datos de los jugadores y entrenadores. Empleo de API con Node.</p>
                <p className="proyects__technoText"><FormattedMessage id="general:technologies" ></FormattedMessage></p>
                <div className="proyects__boxLogos">
                    <img className="proyects__logos" src="src/assets/LogosLeng/css3.png" />
                    <img className="proyects__logos" src="src/assets/LogosLeng/html5.png" />
                    <img className="proyects__logos" src="src/assets/LogosLeng/react.png" />
                    <img className="proyects__logos" src="src/assets/LogosLeng/nodejs.png" />
                    <img className="proyects__logos" src="src/assets/LogosLeng/sass.png" />
                </div>
              </div>
            </div>
            
        </div>
        
        
      </div>
  )
};

export default Proyects;