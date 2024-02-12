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
          <h4>Hello world !</h4>
          <br />
          <p>
            I am a software engineer actively broadening my expertise by
            pursuing a Master's in Software Engineering Systems at Northeastern
            University.
          </p>

          <p>
            I previously served at Sony India, where I had the oppurtunity to
            make contributions to a critical tool utilized by Sony Pictures for
            processing movies and videos prior to their release, known as
            "Viewing Experience." During my tenure, I also developed an in-house
            application for the team. This experience was instrumental in
            enhancing my skills in full-stack technologies and laying a solid
            foundation for my career in software engineering.
          </p>

          <p>
            I have a strong interest in contributing to open-source projects,
            exploring distributed systems, and delving into cloud computing. I
            am actively learning and eager to embark on my journey in these
            domains.
          </p>

          <p>
            Regarding technical skills, I have expertise in languages such as
            Python, Java, C#, and JavaScript. My proficiency extends to backend
            technologies like Node.js, Rest APIs, and the .NET Framework, as
            well as the Django Framework. In frontend development, I am skilled
            in HTML5, CSS3, React.js, XML, and XAML. Additionally, I have
            experience working with databases, including MongoDB, SQL, MySQL,
            and MSSQL.
          </p>

          <p>
            Excited about the prospect of connecting with like-minded
            individuals, contributing to meaningful projects, and collaborating
            to build innovative solutions that make a positive impact. Looking
            forward to exploring new opportunities, sharing insights, and
            collectively creating something cool.
          </p>
        </Container>

        {/* <Container className="about-skills">
          <h3>Technical Skills: </h3>
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
        </Container> */}
      </Container>
    </>
  );
};
export default About;
