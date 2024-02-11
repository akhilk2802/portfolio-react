import { Container, ButtonGroup, Button, Row, Col } from "react-bootstrap";
import "../styles/css/Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faLetterboxd,
} from "@fortawesome/free-brands-svg-icons";
import akhilProfile from "../assets/akhilProfilePic.jpg";
import { useTheme } from "./ThemeContext";

const Home = () => {
  const { theme } = useTheme();

  const [text] = useTypewriter({
    words: [
      "Full Stack Developer 👨🏼‍💻",
      "Grad student at Northeastern University 🎓",
      "Designer 🔨",
      "Photographer 📸",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <>
      <Container fluid className={`home-main ${theme}`}>
        <Container className="home-introSection">
          <Row className="d-flex align-items-stretch">
            <Col md={4} className="col-1">
              <img src={akhilProfile} height={400} alt="Akhilesh Kumbar" />
            </Col>
            <Col md={8} className="col-2">
              <Container className="home-title">
                <h1>Hi, I'm Akhilesh Kumbar</h1>
              </Container>
              <Container className="home-subtitle">
                <h5>
                  <span>{text}</span>
                  <span>
                    <Cursor />
                  </span>
                </h5>

                <Button
                  className="button-resume"
                  href="https://drive.google.com/file/d/18KXV0kWrXg8sCH_9tEKEJsydn6IgbR8O/view?usp=sharing"
                  target="_blank"
                >
                  Download / View Resume
                </Button>
              </Container>
            </Col>
          </Row>
        </Container>

        <Container className="home-connect">
          <Container className="home-connect-subHeading">
            <h4>Lets connect :</h4>
          </Container>
          <Container>
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
      </Container>
    </>
  );
};
export default Home;
