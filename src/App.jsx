import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Navbar } from './components/navbar/navbar';
import { Home } from "./components/home/home";

function App() {
      //darkmode
      const [darkMode, setDarkMode] = useState(false);
    
      const toggleDarkMode = () => {
          setDarkMode(!darkMode);
          // Guarda el estado en localStorage para persistencia
          localStorage.setItem('darkMode', !darkMode ? 'dark' : 'light');
      };
  
      useEffect(() => {
          const savedMode = localStorage.getItem('darkMode');
          if (savedMode === 'dark') {
              setDarkMode(true);
          }
      }, [toggleDarkMode]);


  return (
    <Router>
      <div className={`app ${darkMode ? 'dark-mode' : ''}`}>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
        <Home/>
      </div>
    </Router>
  )
}

export default App
