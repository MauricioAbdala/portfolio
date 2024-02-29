import styles from "./style.module.css";

export const ProjectsList = ({ title, parag, img }) => {
  return (

    <li className={styles.projectList}>
      <div>
        <h3 className="titleLarge" >{title}</h3>
        <p className={styles.parag}>{parag}</p>
        <a className="btnAnchor">Saiba mais</a>
      </div>
      <div>
        <img src={img} alt={title}></img>
      </div>

    </li>


  );
};