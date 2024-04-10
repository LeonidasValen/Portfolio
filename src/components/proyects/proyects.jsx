import proyects from '../../api/proyect.json'
import { useLanguage } from '../../context/languageContext'
import './proyect.css'

const title = {
    Español: "Proyectos",
    English: "Proyect"
  };

export function Proyects(){
    const {language} = useLanguage()

    return(
        <section className='proyects' id='proyects'>
            <h1>{title[language]}</h1>
            <div className="content-tabs">
                {/* <ul className='tabs'>
                    <li className="tabs-item active">Proyectos 1</li>
                    <li className="tabs-item">Proyectos 2</li>
                </ul> */}
                <div className='proyects-tabs'>
                    <div className='proyects-content'>

                        {proyects.map((proyect)=>(
                            <article className='proyect-article' key={proyect.id}>
                                <a href={proyect.href} target='_black'>
                                
                                <header className='img-proyect'>
                                    <img src={proyect.thumbnail} alt="foto-proyecto" />
                                    <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-link">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                        <path d="M9 15l6 -6" /><path d="M11 6l.463 -.536a5 5 0 0 1 7.071 7.072l-.534 .464" />
                                        <path d="M13 18l-.397 .534a5.068 5.068 0 0 1 -7.127 0a4.972 4.972 0 0 1 0 -7.071l.524 -.463" />
                                    </svg>
                                </header>
                                <div className='info-proyect'>
                                    <span>{proyect.title}</span>
                                    <p>{proyect.desc[language]}</p>
                                </div>
                                
                                <div className='skills-proyects'>
                                    {proyect.skills.map((skill, index) => (
                                        <div key={index} className='skill'>{skill}</div>
                                    ))}
                                </div>
                                </a>
                            </article>
                        ))}


                    </div>
                </div>
            </div>
        </section>
    )
}