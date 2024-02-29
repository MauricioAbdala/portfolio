import Logo1 from "../../assets/whatsapp-icon.png";
import Logo2 from "../../assets/linkedin-icon.png";
import Logo3 from "../../assets/github-icon.png";
import styles from "./style.module.css";
import { user } from "../../data/user.js";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.flexBox}>
                    <li>
                        <h2 className="title2">Contato</h2>
                        <img className={styles.imgIcon} src={Logo1} alt="whatsApp"></img>
                        <img className={styles.imgIcon} src={Logo2} alt="linkedin"></img>
                        <img className={styles.imgIcon} src={Logo3} alt="gitHub"></img>
                    </li>
                    <p className="paragraph">Todos os direitos reservados &copy;- {user}</p>
                </div>
            </div>
        </footer>
    );
};