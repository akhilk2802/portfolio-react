import { Container, Row, Col } from "react-bootstrap";
import "../styles/css/About.css";
import { useSpring, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHeart } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "./ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const fadeIn = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(20px)" },
  });

  return (
    <>
      <Container fluid className={`about-main ${theme}`}>
        <Container className="about-title">
          <h2>About Me 🙇‍♂️</h2>
          <p>Just a quick glimpse.</p>
        </Container>

        <Container className="about-body">
          <h5>Hello world, I'm Akhil!</h5>
          <br />
          <p>
            As a seasoned software developer, I bring proficiency in TypeScript
            and JavaScript, coupled with expertise in React, Node.js, and
            Express.js frameworks. My commitment to continuous learning is
            evident in my current exploration of backend technologies, aiming to
            evolve into a versatile full-stack developer.
          </p>

          <p>
            I pride myself on being a swift learner and thrive on collaborative
            client engagements, delivering efficient, scalable, and
            user-friendly solutions to address real-world challenges. I am not
            just a coder; I am a problem solver who navigates corporate
            complexities with a code editor, avoiding jargon overload.
          </p>

          <p>
            Whether it's diving into SDE or web development roles, I am ready to
            be your code wrangler, eager to contribute to building innovative
            and impactful solutions. Let's embark on a journey to create
            something extraordinary together!
          </p>
        </Container>

        <Container className="about-skills">
          <h3>Skills: </h3>
          <br />
          <Container className="skills-table">
            <animated.div style={fadeIn}>
              <Row>
                <Col className="skills-table-col" md={2}>
                  <h5>Language:</h5>{" "}
                </Col>
                <Col className="skills-table-col" md={10}>
                  <h5>Java, JavaScript, Python, C#, C++ </h5>
                </Col>
              </Row>

              <Row>
                <Col className="skills-table-col" md={2}>
                  <h5>Frontend:</h5>{" "}
                </Col>
                <Col className="skills-table-col" md={10}>
                  <h5>HTML5, CSS3, React.JS, XML, XAML</h5>
                </Col>
              </Row>

              <Row>
                <Col className="skills-table-col" md={2}>
                  <h5>Backend:</h5>
                </Col>
                <Col className="skills-table-col" md={10}>
                  <h5>
                    {" "}
                    Node.JS, Rest API ,Django Rest Framework, .NET Framework,
                    AWS EC2, SQL, MySQL, Express.JS
                  </h5>
                </Col>
              </Row>

              <Row>
                <Col className="skills-table-col" md={2}>
                  <h5>Web Servers:</h5>{" "}
                </Col>
                <Col className="skills-table-col" md={10}>
                  <h5>Apache HTTP server, Nginx server</h5>
                </Col>
              </Row>

              <Row>
                <Col className="skills-table-col" md={2}>
                  <h5>Tools:</h5>{" "}
                </Col>
                <Col className="skills-table-col" md={10}>
                  <h5>
                    Visual Studio, Eclipse, Postman, Microsoft SQL, Git, Github
                  </h5>
                </Col>
              </Row>
            </animated.div>
          </Container>
        </Container>
      </Container>
    </>
  );
};
export default About;
