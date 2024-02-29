import Logo from "../../assets/portfolio.png";
import styles from "./style.module.css";

export const Header = () => {
    return (

        <header>
            <div className={`container ${styles.navBox}`}>
                <div>
                    <img src={Logo} alt="logo portfólio" />
                </div>
                <div >
                    <li className={styles.nav}>
                        <ul>Sobre</ul>
                        <ul>Stack</ul>
                        <ul>Projetos</ul>
                    </li>
                </div>
                <div>
                    <button type="submit" className="btn">Contato</button>
                </div>
            </div>
        </header>

    );
};