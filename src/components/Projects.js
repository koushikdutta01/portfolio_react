import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import tindog from "../assets/img/tindog.png";
import youtube from "../assets/img/youtube.png";
import landing from "../assets/img/landing.png";
import makecv from "../assets/img/make-cv.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Tindog",
      description: "Tinder for Dogs.",
      imgUrl: tindog,
    },
    {
      title: "Youtube Clone",
      description: "Youtube Frontend Clone",
      imgUrl: youtube,
    },
    {
      title: "Business Landing",
      description: "Landing page",
      imgUrl: landing,
    },
    {
      title: "Cv Maker",
      description: "Creats CV in no time",
      imgUrl: makecv,
    },
    
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I have always been enamored with the art of designing and developing web projects. With a keen eye for detail and a desire to innovate, I bring creativity and originality to each project I work on, resulting in a unique and impactful online presence.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>I have always been enamored with the art of designing and developing web projects. With a keen eye for detail and a desire to innovate, I bring creativity and originality to each project I work on, resulting in a unique and impactful online presence.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More Projects are to be added though ,you can check my guthub:)</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
                
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      
    </section>
  )
}
