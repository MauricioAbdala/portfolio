import { ProjectsList } from "./ProjectsList";
import { projects } from "../../data/projects";
import styles from "./style.module.css";


export const ProjectSection = () => {
  return (

    <section className={styles.projectSection}>
      <div className="container">
        <h2 className="title2">Projetos</h2>
        <ul className={styles.projectList}>
          {projects.map((project) => {

            return (
              <ProjectsList key={project.id} title={project.name} parag={project.description} img={project.img} />
            );
          })}
        </ul>
      </div>
    </section>
  );
};