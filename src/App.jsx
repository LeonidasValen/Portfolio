import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Home } from "./components/home/home";
import { Skills } from "./components/skills/skills";
import { Footer } from "./components/footer/footer";
import { Proyects } from "./components/proyects/proyects";

import { LanguageProvider } from "./context/languageContext";

function App() {
  //verifica si el sistema esta en modo oscuro
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  //verifica si hay una preferencia de modo gurdado
  const storedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

  //si hay un modo almacena usara ese sino usara la preferencia del sistema
  const [darkMode, setDarkMode] = useState(storedDarkMode !== null ? storedDarkMode : prefersDarkMode);

  //si hay un cambio en el sistema de modo actualiza su modo
  useEffect(() => {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e) => setDarkMode(e.matches);
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener(handleChange);
  }, []);

  //alterna los modos y lo alamacena
  const toggleDarkMode = () => {
      const newMode = !darkMode;
      setDarkMode(newMode);
      localStorage.setItem('darkMode', JSON.stringify(newMode));
  };


  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <LanguageProvider>
          <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
          <Home/>
          <Skills/>
          <Proyects/>
          <Footer/>
        </LanguageProvider>
      </div>
    </Router>
  )
}

export default App
