import { Container } from "react-bootstrap";
import "../styles/css/Projects.css";
import ProjectCard from "./ProjectCard";
import uniCycle from "../assets/projectImage/UniCycle.jpeg";
import trackSphere from "../assets/projectImage/TrackSphere.jpeg";
import { useTheme } from "./ThemeContext";

const Projects = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "Uni-Cycle",
      text: "a user-friendly platform promoting secure and eco-conscious transactions for buying and selling used products within university communities",
      gitLink: "https://github.com/Info6150Project/Uni-Cycle",
      image: uniCycle,
      techStack: "ReactJS, MongoDB, NodeJS, ExpressJS",
    },
    {
      title: "TrackSphere",
      text: "A Kanban-inspired project and task management system, streamlining organization, promoting effective task management, and enhancing team coordination with a secure, user-friendly interface",
      gitLink:
        "https://github.com/CSYE6200-Object-Oriented-DesignFall2023/final-project-final-group-19",
      image: trackSphere,
      techStack: "ReactJS, SpringBoot, PostGRESQL",
    },
  ];

  return (
    <>
      <Container fluid className={`project-main ${theme}`}>
        <Container className="project-title">
          <h2>Projects 🚀</h2>
          <p>Few of my academic work</p>
        </Container>
        <Container className="project-body">
          {projects.map((project) => (
            <ProjectCard
              title={project.title}
              text={project.text}
              gitLink={project.gitLink}
              image={project.image}
              techStack={project.techStack}
            />
          ))}
        </Container>
      </Container>
    </>
  );
};
export default Projects;
