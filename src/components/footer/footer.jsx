import { useLanguage } from '../../context/languageContext';
import './footer.css'

const copyrightText = {
    Español: "© Diseño reservado y avatar hecho con IA",
    English: "© Design reserved and avatar made with AI"
};

export function Footer(){
    const { language } = useLanguage();
    return(
        <footer className='footer' id='footer'>
            <div className="footer-content">
                <div className='footer-text'>
                    <h1>Leonidas</h1>
                    <p>{copyrightText[language]}</p>
                </div>
                <div className='contact-content'>
                    <div className='contact'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                        </svg>
                        <span>leon.alberto4502@gmail.com</span>
                    </div>
                    <div className='contact'>
                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-phone"><path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        </svg>
                        <span>11 6204-0911</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}