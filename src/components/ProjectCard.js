import { Container, Card, Button } from "react-bootstrap";
import { useSpring, animated } from "react-spring";
import "../styles/css/ProjectCard.css";
import { useTheme } from "./ThemeContext";

const ProjectCard = (props) => {
  const animatedProp = useSpring({
    opacity: 1,
    transform: "translateY(0)",
    from: { opacity: 0, transform: "translateY(50px)" },
    config: { duration: 300 },
  });
  const { theme } = useTheme();

  return (
    <>
      <animated.div style={animatedProp}>
        <Card className={`projectCard-main ${theme}`}>
          <Card.Body className="d-flex">
            <div className="col-md-4">
              <Card.Img
                className="projectCard-image"
                variant="top"
                src={props.image}
              />
            </div>
            <div className="col-md-4 card-title-text">
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>{props.text}</Card.Text>
            </div>
            <div className="col-md-4 card-footer-github">
              <Button href={props.gitLink} target="_blank" variant="primary">
                Github
              </Button>
              <Card.Text>{props.techStack}</Card.Text>
            </div>
          </Card.Body>
        </Card>
      </animated.div>
    </>
  );
};
export default ProjectCard;
