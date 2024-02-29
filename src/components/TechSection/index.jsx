import { TechList } from "./TechList";
import { technologies } from "../../data/technologies";
import styles from "./style.module.css";

export const TechSection = () => {
    return (

        <section className={styles.techSection}>
            <div className="container">
                <h2 className="title2">Tecnologias</h2>
                <ul className={styles.techList}>
                    {technologies.map((technology) => (
                        <TechList key={technology.id} img={technology.img} title={technology.name} />
                    ))}
                </ul>
            </div>
        </section>

    );
};