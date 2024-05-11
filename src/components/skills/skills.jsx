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
          "color": "#ff5722",
          "ani": 4
        },
        {
          "icon": "icons/css-3.png",
          "lenguaje": "CSS",
          "color": "#2196f3",
          "ani": 3
        },
        {
          "icon": "icons/js.png",
          "lenguaje": "JavaScript",
          "color": "#ffdf00",
          "ani": 10
        },
        {
          "icon": "icons/php.png",
          "lenguaje": "PHP",
          "color": "#777bb3",
          "ani": 3
        },
        {
          "icon": "icons/mysql.png",
          "lenguaje": "MySQL",
          "color": "#00608c",
          "ani": 5
        },
        {
          "icon": "icons/mongodb.png",
          "lenguaje": "MongoDB",
          "color": "#00608c",
          "ani": 7
        },
        {
          "icon": "icons/react.png",
          "lenguaje": "ReactJS",
          "color": "#00d8ff",
          "ani": 5
        },
        {
          "icon": "icons/nodejs.png",
          "lenguaje": "NodeJS",
          "color": "#8bc500",
          "ani": 6
        },
        {
          "icon": "icons/express2.png",
          "lenguaje": "Express",
          "color": "#8bc500",
          "ani": 7
        },
        {
          "icon": "icons/vitejs.png",
          "lenguaje": "ViteJS",
          "color": "#b440fe",
          "ani": 6
        },
        {
          "icon": "icons/next.png",
          "lenguaje": "NextJS",
          "color": "#000",
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
                            <img src={tech.icon}  alt="" />
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