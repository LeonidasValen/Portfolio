import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../../context/languageContext";

import './navbar.css';

const NavText = {
    Español: {
        inicio: "Inicio",
        proyectos: "Proyectos",
        experiencias: "Experiencias",
        contactos: "Contactos"
    },
    English: {
        inicio: "Home",
        proyectos: "Projects",
        experiencias: "Experiences",
        contactos: "Contact"
    }
};

export function Navbar({ toggleDarkMode, darkMode }) {
    //select language
    //contexto del lenguage
    const {language} = useLanguage()
    //cambia el contexto del idioma
    const { setLanguage } = useLanguage();
    //estado del idioma inicial en el texto del button (español)
    const [selectedLanguage, setSelectedLanguage] = useState('Español');

    //estado del menu de los lenguajes
    const [menuVisible, setMenuVisible] = useState(false);
    const menuRef = useRef(null);

    //toggle del button
    const MouseMenuView = () => setMenuVisible(!menuVisible);

    //cerrar por medio click en otro lado fuera del button
    const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuVisible(false);
        }
    };
    //effecto que si al hacer click sobre cualquier lado activa la funcion handleOutsideClick
    useEffect(() => {
        document.addEventListener('click', handleOutsideClick);
        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const handleLanguageChange = (language) => {
        setLanguage(language)//cambia el idioma
        setSelectedLanguage(language);//funcion que cambia texto del button
        setMenuVisible(false); // cierra el menu despues de seleccionar un idioma
        //console.log('Idioma actual:', language);//imprime en la consola el lenuaje actual
    };

    //menu slider responsive
    const [slideMenu, setSlideMenu] = useState(false);
    
    const toggleMenu = () => {
        setSlideMenu(!slideMenu);
    }



    return (
        <nav className="nav-menu">
            <header className="menu-container">
                <div className="profile">
                    <div className="img-profile"><img src="./img/leo.jpg" alt="" /></div>
                    <div className="info-profile">
                        <span>Leonel Valenzuela</span>
                        <p>Fullstack developer</p>
                    </div>
                </div>

                <ul className={slideMenu ? 'items-container slide' : 'items-container'}>
                    <li className="menu-items"><NavLink to="/">{NavText[language].inicio}</NavLink></li>
                    <li className="menu-items"><NavLink to="/">{NavText[language].proyectos}</NavLink></li>
                    <li className="menu-items"><NavLink to="/">{NavText[language].experiencias}</NavLink></li>
                    <li className="menu-items"><NavLink to="/">{NavText[language].contactos}</NavLink></li>
                </ul>

                <div className="confi-selector" ref={menuRef}>
                    <div className="select-language">
                        <button onClick={MouseMenuView} className={`${menuVisible ? 'active' : ''}`}>{selectedLanguage}
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevron-down" width="20" height="20" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M6 9l6 6l6 -6" />
                            </svg>
                        </button>
                        <ul className={`language-list ${menuVisible ? 'active' : ''}`}>
                            <li onClick={() => handleLanguageChange('Español')}>Español</li>
                            <li onClick={() => handleLanguageChange('English')}>English</li>
                        </ul>
                    </div>
                    <button onClick={toggleDarkMode} className={darkMode ? 'bg-mode dark' : 'bg-mode light'} aria-label="Dark mode">
                        <svg className={darkMode ? 'icon-moon dark' : 'icon-moon light'} height="30" width="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path clipRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" fillRule="evenodd"></path>
                        </svg>
                        <svg className={darkMode ? 'icon-sun dark' : 'icon-sun light'} height="30" width="30" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z"></path>
                        </svg>
                    </button>
                    <button onClick={toggleMenu} className={slideMenu ? 'btn-hamburger slide' : 'btn-hamburger'}>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="30"  height="30"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6l16 0" /><path d="M4 12l16 0" /><path d="M4 18l16 0" />
                        </svg>
                    </button>
                </div>
            </header>
        </nav>
    );
}
