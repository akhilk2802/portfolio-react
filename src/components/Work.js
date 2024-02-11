import { Container } from "react-bootstrap";
import sonyLogo from "../assets/sonyLogo.png";
import vrizeLogo from "../assets/vrizeLogo.png";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import StarIcon from "@mui/icons-material/Star";
import { useTheme } from "./ThemeContext";

import "../styles/css/Work.css";

const Work = () => {
  const { theme } = useTheme();

  return (
    <>
      <Container fluid className={`work-main ${theme}`}>
        {/* <Container className="work-main dark"> */}
        {console.log(theme)}
        <Container className="work-title">
          <h2>Work Experience 🛠️</h2>
          <p>My career path</p>
        </Container>

        <Container className="work-body">
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="August 2022 - August 2023"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkTwoToneIcon />}
            >
              <img alt="sony" src={sonyLogo} height={50} />
              <br />
              <h3 className="vertical-timeline-element-title">
                Sony India Software Center
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Software Engineer
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                Bangalore, IN
              </h6>
              <p>
                <ul>
                  <li>
                    Mastered .NET and Integrated improvements to the "Viewing
                    Experience Client" Application, incorporated version display
                    feature into the settings menu which enhanced the
                    transparency by 20%
                  </li>
                  <li>
                    Revamped a single-screen Multiplexer, implementing a
                    producer-consumer model to seamlessly handle and showcase
                    multiple screens using MQTT protocol, resulting in a 40%
                    reduction in screen loading time and enhanced user
                    experience
                  </li>
                  <li>
                    Created and deployed 'Stateo" on AWS EC2 instance, A Single
                    Page Web Application using ReactJS, integrating (Django Rest
                    Framework) DRF for backend APIs, SQLite was used for
                    database management, which decreased the data retrieval time
                  </li>
                  <li>
                    'Stateo" enables employees to effortlessly track daily and
                    advance status, which improved team engagement by 25%
                  </li>
                  <li>
                    Implemented a role-based authentication with Active
                    Directory for 'Stateo"; ensured data integrity and
                    streamlined user access, resulting in improved security and
                    compliance while reducing login errors by 40%
                  </li>
                  <li>
                    Implemented AWS Simple Email Service (SES) for automated
                    daily report notifications to higher authorities, which
                    increased the transparency by 50%
                  </li>
                  <li>
                    <strong>
                      Achievement - Won organization-wide held Hackathon called
                      CPL
                    </strong>
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date="February 2022 - July 2022"
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
              icon={<WorkTwoToneIcon />}
            >
              <img alt="vrize" src={vrizeLogo} height={50} />

              <h3 className="vertical-timeline-element-title">
                Vrize Solutions Pvt. Ltd
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                Software Engineer Intern
              </h5>
              <h6 className="vertical-timeline-element-subtitle">
                Bangalore, IN
              </h6>

              <p>
                <ul>
                  <li>
                    Engineered a seamless transition from a multi-page web app
                    to a single-page architecture, utilizing ReactJS and
                    achieved a 40% reduction in server requests, leading to a
                    30% improvement in app performance
                  </li>
                  <li>
                    Utilized ReactJS and Material UI to overhaul the platform
                    engineering section of the organizational landing page,
                    leading to a 30% enhancement in user engagement and a 20%
                    decrease in page load time
                  </li>
                </ul>
              </p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
              iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
              icon={<StarIcon />}
            />
          </VerticalTimeline>
        </Container>
      </Container>
    </>
  );
};
export default Work;
