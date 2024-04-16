import { useState,useEffect, useRef } from "react";
import { useLanguage } from "../../context/languageContext";

export function BtnLanguage(){
    //select language

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
        if (menuRef.current && !menuRef.current.contains(event.target)) {//verifica si hubo un click fuera del elemento
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

    //seleccion de idioma
    const handleLanguageChange = (language) => {
        setLanguage(language)//cambia el idioma
        setSelectedLanguage(language);//funcion que cambia texto del button
        setMenuVisible(false); // cierra el menu despues de seleccionar un idioma
        //console.log('Idioma actual:', language);//imprime en la consola el lenuaje actual
    };

    return(
        <div className="select-language"  ref={menuRef}>
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
    )
}