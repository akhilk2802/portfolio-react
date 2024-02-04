import { Navbar, Container, Nav, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/css/Header.css";
import logo from "../assets/akhillogo.png";
import logo1 from "../assets/akhilLogo1.png";
import logo2 from "../assets/akhilLogo2.png";
import { useTheme } from "./ThemeContext";
import lightmode from "../assets/lightMode.png";
import darkmode from "../assets/darkMode.png";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  const renderThemeButton = () => {
    if (theme === "light") {
      return darkmode;
    } else return lightmode;
  };

  const renderLogo = () => {
    if (theme === "light") {
      return logo1;
    } else return logo2;
  };

  return (
    <>
      <Navbar className={`header-navbar ${theme}`}>
        <Container fluid>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              alt="Akhil"
              src={renderLogo()}
              width="50"
              height="50"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link className="nav-link" as={Link} to={"/about"}>
              About
            </Nav.Link>
            <Nav.Link className="nav-link" as={Link} to={"/project"}>
              Projects
            </Nav.Link>
            <Nav.Link className="nav-link" as={Link} to={"/work"}>
              Work
            </Nav.Link>
            <Nav.Link onClick={toggleTheme}>
              {
                <img
                  alt="themeButton"
                  src={renderThemeButton()}
                  width={20}
                  height={20}
                  className="d-inline-block align-top"
                />
              }
            </Nav.Link>
            <Dropdown > 

            </Dropdown>
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
