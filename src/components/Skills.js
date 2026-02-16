import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const skills = [
    {
      title: "Backend",
      tags: ["Java 21", "Spring Boot 3", "JPA"]
    },
    {
      title: "Architecture",
      tags: ["Microservices", "System Design"]
    },
    {
      title: "Infrastructure",
      tags: ["Docker", "PostgreSQL", "Linux"]
    },
    {
      title: "Quality",
      tags: ["Clean Code", "TDD", "SOLID"]
    }
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <TrackVisibility>
          {({ isVisible }) =>
          <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
            <div className="compact-expertise">
              <span className="expertise-label">[stack]:</span>
              <Row className="skills-grid align-items-center">
                {
                  skills.map((skill, index) => {
                    return (
                      <Col key={index} xs={6} md={3} className="mb-3 mb-md-0">
                        <div className="skill-block">
                          <h5>{skill.title}</h5>
                          <div className="skill-tags">
                            {skill.tags.join(" | ")}
                          </div>
                        </div>
                      </Col>
                    )
                  })
                }
              </Row>
            </div>
          </div>}
        </TrackVisibility>
      </Container>
    </section>
  )
}
