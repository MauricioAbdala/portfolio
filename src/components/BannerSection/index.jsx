import Banner from "../../assets/banner-img.png";
import { username } from "../../data/user";
import styles from "./style.module.css";

export const BannerSection = () => {

    return (


        <section className={styles.bannerSection}>
            <div className="container">
                <div className={styles.flexBox}>
                    <div>
                        <h3 className={`title3 ${styles.title3}`}>{username}</h3>
                        <h1 className="title1">Bem vindo ao meu portfólio</h1>
                        <p className="paragraph">Uma frase interessante sobre mim</p>
                        <button type="submit" className="btn">Saiba mais</button>
                    </div>

                    <img src={Banner} alt="banner" />

                </div>

            </div>
        </section>

    );
};