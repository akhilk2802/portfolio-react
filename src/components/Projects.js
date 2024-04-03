import { Container } from "react-bootstrap";
import "../styles/css/Projects.css";
import ProjectCard from "./ProjectCard";
import ProjectCard1 from "./ProjectCard1";
import uniCycle from "../assets/projectImage/UniCycle.jpeg";
import trackSphere from "../assets/projectImage/TrackSphere.jpeg";
import colabeditor from "../assets/projectImage/colabeditor.gif";
import therapease from "../assets/projectImage/therapeaseai.jpeg";
import { useTheme } from "./ThemeContext";

const Projects = () => {
  const { theme } = useTheme();

  const projects = [
    {
      title: "TherapEase.ai",
      text: "A Game based pre assesment tool built for mental health practitioners, using MERN Stack and Machine learning models - BART and Stable Diffusion XL",
      gitLink: "https://github.com/akhilk2802/TherapEase.ai",
      image: therapease,
      techStack: "ReactJS, ExpressJS, MongoDB, NodeJS",
    },
    {
      title: "Uni-Cycle",
      text: "a user-friendly platform promoting secure and eco-conscious transactions for buying and selling used products within university communities",
      gitLink: "https://github.com/akhilk2802/Uni-Cycle",
      image: uniCycle,
      techStack: "ReactJS, MongoDB, NodeJS, ExpressJS",
    },
    {
      title: "TrackSphere",
      text: "A Kanban-inspired project and task management system, streamlining organization, promoting effective task management, and enhancing team coordination with a secure, user-friendly interface",
      gitLink: "https://github.com/akhilk2802/TaskSphere",
      image: trackSphere,
      techStack: "ReactJS, SpringBoot, PostGRESQL",
    },
    {
      title: "CollabEditor",
      text: "A simple and easy collaborative text / code editor, for interviews, group projects, and presentations",
      gitLink: "https://github.com/akhilk2802/CollabEditor",
      image: colabeditor,
      techStack: "ReactJS, MongoDB, Socket.io, NodeJs",
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
