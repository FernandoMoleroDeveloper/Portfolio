import './App.scss'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Proyects from './Components/Proyects/Proyects'
import WhoIAm from './Components/WhoIAm/WhoIAm'
import { LangProvider } from "./Components/Context/langContext";
import Title from './Components/Title/Title'


function App() {
  

  return (
    <>
    <LangProvider>
      <Header></Header>
      <Title></Title>
      <WhoIAm></WhoIAm>
      <Proyects></Proyects>
      <Footer></Footer>
    </LangProvider>
      
    </>
  )
}

export default App
