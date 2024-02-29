import styles from "./style.module.css";

export const TechList = ({ img, title }) => {
    return (
        <li className={styles.techList}>
           
                <img src={img} alt={title} />
           
            <div>
                <h3 className="titleLarge">{title}</h3>
            </div>
        </li>
    );
};