import './App.scss'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Proyects from './Components/Proyects/Proyects'
import WhoIAm from './Components/WhoIAm/WhoIAm'
import { LangProvider } from "./Components/Context/langContext";


function App() {
  

  return (
    <>
    <LangProvider>
      <Header></Header>
      <WhoIAm></WhoIAm>
      <Proyects></Proyects>
      <Footer></Footer>
    </LangProvider>
      
    </>
  )
}

export default App
