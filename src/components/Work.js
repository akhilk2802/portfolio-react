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
                    Acquired proficiency in the .NET Framework while actively
                    contributing to the ongoing enhancement of the Viewing
                    Experience Client Application. Integrated a version display
                    feature into the settings menu using XAML file manipulation,
                    ensuring users have clear visibility of the application's
                    current version.
                  </li>
                  <li>
                    Converted a single-screen Multiplexer, employing a
                    producer-consumer model to accommodate and display multiple
                    screens. This involved intricately managing individual
                    threads for optimal performance and responsiveness.
                  </li>
                  <li>
                    Developed “Stateo”, a Single Page Web Application, utilizing
                    ReactJS for an intuitive and modern user interface, and DRF
                    for robust backend APIs. Database management was executed
                    efficiently using MSSQL, ensuring data integrity
                  </li>
                  <li>
                    "Stateo" enables employees to seamlessly track their daily
                    and advance status (WFH, WFO, Leave), significantly
                    improving team efficiency, communication, and overall
                    performance. The application was deployed on AWS EC2. To
                    enhance security, a role-based signup and login system with
                    integrated Active Directory authentication was implemented.
                    Was recognized for reshaping workplace dynamics and
                    fostering positive team collaboration
                  </li>
                  <li>
                    <strong>
                      Achievement - Secured second prize in the
                      organization-wide held Hackathon called CPL
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
                    Worked on application to re-architect a multi page web-app
                    to single page web-app, boosting performance and engagement
                  </li>
                  <li>
                    Spearheaded the design initiative for the organization's
                    team structure, playing a pivotal role in shaping the
                    Company's landing page, ensuring a compelling and effective
                    online presence.
                  </li>
                  <li>
                    Designed and implemented NodeJS APIs dedicated to retrieving
                    data from the database for critical sections, specifically
                    the Careers page and Platform Engineering page of the
                    company's website. This initiative streamlined data access,
                    contributing to an enhanced and efficient user experience.
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
