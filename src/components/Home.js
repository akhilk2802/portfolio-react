import { Container, ButtonGroup, Button } from "react-bootstrap";
import "../styles/css/Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faLetterboxd,
} from "@fortawesome/free-brands-svg-icons";
import { useTheme } from "./ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  const [text] = useTypewriter({
    words: ["Full Stack Developer 👨🏼‍💻", "Designer 🔨", "Photographer 📸"],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <Container fluid className={`home-main ${theme}`}>
        <Container className="home-title">
          <h1>
            Hi, I'm a <span>{text}</span>
            <span>
              <Cursor />
            </span>
          </h1>
        </Container>
        <Container className="home-subtitle">
          <h5>Akhilesh Kumbar</h5>
        </Container>
        <Container className="home-connect">
          <Button
            className="social-button"
            href="https://www.linkedin.com/in/akhileshkumbar/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Button>
          <Button
            className="social-button"
            href="https://github.com/akhil8951"
            target="_blank"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Button>
          <Button
            className="social-button"
            href="https://www.instagram.com/akhil___k/"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </Button>
          <Button
            className="social-button"
            href="mailto:akhilkumbar@outlook.com"
            target="_blank"
          >
            <FontAwesomeIcon icon={faLetterboxd} />
          </Button>
        </Container>
      </Container>
    </>
  );
};
export default Home;
