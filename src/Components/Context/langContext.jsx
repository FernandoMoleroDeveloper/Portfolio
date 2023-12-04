import MensajesIngles from "../../translations/en.json";
import MensajesEspañol from "../../translations/es.json";
import { IntlProvider } from "react-intl";
import { createContext, useState } from "react";

export const langContext = createContext({
  establecerLenguaje: () => {}
});

export const LangProvider = ({ children }) => {
  let localePorDefecto;
  let mensajesPorDefecto;
  const lang = localStorage.getItem("lang");

  if (lang) {
    localePorDefecto = lang;

    if (lang === "es-ES") {
      mensajesPorDefecto = MensajesEspañol;
    } else if (lang === "en-EN") {
      mensajesPorDefecto = MensajesIngles;
    } else {
      localePorDefecto = "en-EN";
      mensajesPorDefecto = MensajesIngles;
    }
  }

  const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
  const [locale, establecerLocale] = useState(localePorDefecto || "en-EN");

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case "es-ES":
        establecerMensajes(MensajesEspañol);
        establecerLocale("es-ES");
        localStorage.setItem("lang", "es-ES");
        break;
      case "en-EN":
        establecerMensajes(MensajesIngles);
        establecerLocale("en-EN");
        localStorage.setItem("lang", "en-EN");
        break;
      default:
        establecerMensajes(MensajesIngles);
        establecerLocale("en-EN");
        localStorage.setItem("lang", "en-EN");
    }
  };

  const intlConfig = {
    locale,
    messages: mensajes,
  };

  return (
    <langContext.Provider value={{ establecerLenguaje }}>
      <IntlProvider {...intlConfig}>{children}</IntlProvider>
    </langContext.Provider>
  );
};
