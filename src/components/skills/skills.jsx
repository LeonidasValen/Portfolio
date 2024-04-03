import { useLanguage } from '../../context/languageContext';
import './skills.css'

const title = {
  Español: "Lenguajes y tecnología",
  English: "Skills ​​and technology"
};

export function Skills(){
  const { language } = useLanguage();

    const skills = [
        {
          "icon": "icons/html-5.png",
          "lenguaje": "HTML",
          "ani": 4
        },
        {
          "icon": "icons/css-3.png",
          "lenguaje": "CSS",
          "ani": 3
        },
        {
          "icon": "icons/js.png",
          "lenguaje": "JavaScript",
          "ani": 10
        },
        {
          "icon": "icons/php.png",
          "lenguaje": "PHP",
          "ani": 3
        },
        {
          "icon": "icons/mysql.png",
          "lenguaje": "MySQL",
          "ani": 5
        },
        {
          "icon": "icons/react.png",
          "lenguaje": "ReactJS",
          "ani": 5
        },
        {
          "icon": "icons/nodejs.png",
          "lenguaje": "NodeJS",
          "ani": 6
        },
        {
          "icon": "icons/vitejs.png",
          "lenguaje": "ViteJS",
          "ani": 6
        },
        {
          "icon": "icons/next.png",
          "lenguaje": "NextJS",
          "ani": 5
        }
      ]
      

    return(
        <section className="lenguaje">

            <h1>{title[language]}</h1>
            
            <div className="lenguaje-content">
                {skills.map((tech, index) => (
                    <div className="lenguaje-icon" key={`item${index}`}>
                        <div className='tech-icon'>
                            <img src={tech.icon} alt="" />
                            <div className="lenguaje-text">
                                <span style={{ animation: `teclear 0.3s steps(${tech.ani}), border 0.5s step-end infinite alternate` }}>
                                    {tech.lenguaje}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}