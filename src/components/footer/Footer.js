import "./style.css"

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import github from "./../../img/icons/gitHub.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><a href="https://vk.com/0netab" target="_blank" rel="noreferrer"><img src={vk} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={instagram} alt="Link"/></a></li>
                        <li className="social__item"><a href="https://github.com/ArthurNyan" target="_blank" rel="noreferrer"><img src={github} alt="Link"/></a></li>
                        <li className="social__item"><a href="#!"><img src={linkedIn} alt="Link"/></a></li>
                    </ul>
                    <div className="copyright">
                        <p>© 2022 frontend-dev.com</p>
                    </div>
                </div>
            </div>
        </footer>
        );
}
 
export default Footer;