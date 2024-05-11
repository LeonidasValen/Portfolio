import { useLanguage } from '../../context/languageContext';
import './home.css'

const aboutMeText = {
    Español: "Mi nombre es Leonel Valenzuela soy programador fullstack y un apasionado por el mundo de la programación, siempre estoy preparado para aprender, mejorar y desarrollarme técnicamente en este ámbito, creando sitios eficientes para ayudar y dar solución a los problemas.",
    English: "My name is Leonel Valenzuela, I am a fullstack programmer and passionate about the world of programming. I am always ready to learn, improve, and develop technically in this field, creating efficient websites to help and solve problems."
};

const buttonText = {
    Español: "Descargar CV",
    English: "Download CV"
};

const aboutMe = {
    Español: "Sobre mi",
    English: "About me"
};

export function Home(){
    const { language } = useLanguage();

    return(
        <section className='banner' id='home'>
            <div className='banner-content'>
                <div className='text-info'>
                    <h1>{aboutMe[language]}</h1>
                    <p>{aboutMeText[language]}</p>
                    <div className='btn-info-content'>

                        <a className='btn-bg' href="https://www.linkedin.com/in/leonel-valenzuela-65aa462b4/" aria-label='link linkedin' target="_blank">
                            <button className='btn-linkedin'>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                                    <path d="M8 11l0 5" />
                                    <path d="M8 8l0 .01" />
                                    <path d="M12 16l0 -5" />
                                    <path d="M16 16v-3a2 2 0 0 0 -4 0" />
                                </svg>
                                Linkedin
                            </button>
                        </a>
                        <a className='btn-bg' href="https://github.com/LeonidasValen" aria-label='link github' target="_blank">
                            <button className='btn-github'>        
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                </svg>
                                GitHub
                            </button>
                        </a>
                        <a className='btn-bg' href="./pdf/CV-Leonel-Valenzuela.pdf" download="cv-leonel-valenzuela.pdf" aria-label='descarga de cv'>
                            <button className='btn-cv'>
                                <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-download">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
                                    <path d="M7 11l5 5l5 -5" />
                                    <path d="M12 4l0 12" />
                                </svg>
                                {buttonText[language]}
                            </button>
                        </a>

                    </div>
                </div>

                <div className='banner-img'>
                    <img src="./img/leo.png" alt="foto-perfil" />
                </div>
            </div>
        </section>
    )
}