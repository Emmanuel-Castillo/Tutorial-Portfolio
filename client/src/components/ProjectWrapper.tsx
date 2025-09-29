import { Project } from "../projects";

type ProjectProps = {
  project: Project;
};
const ProjectWrapper = ({ project }: ProjectProps) => {
  return (
    <li className="project">
      <div className="project__wrapper">
        <img src={project.image} className="project__img" alt={project.title} />
        <div className="project__description">
          <h3 className="project__description--title">{project.title}</h3>
          <h4 className="project__description--sub-title">
            {project.subTitle}
          </h4>
          <p className="project__description--para small-text">
            {project.description}
          </p>
          <div className="project__description--links">
            {project.links.map((link) => (
              <a
                href={link.url}
                target="_blank"
                className="project__description--link"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};

export default ProjectWrapper;
