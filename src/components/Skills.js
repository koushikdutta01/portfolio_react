import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Skills = () => {
  const skills = [
    {
      title: "Backend Development",
      description: "Specializing in Java 21 and Spring Boot 3.x. Expertise in building high-performance REST APIs, Spring Data JPA, and robust Exception Handling mechanisms.",
    },
    {
      title: "Microservices & Cloud",
      description: "Experienced in Microservices architecture, including Service Discovery, Centralized Configuration, and API Gateways. Focused on building resilient and scalable systems.",
    },
    {
      title: "Infrastructure & Tools",
      description: "Proficient in Docker for containerization and PostgreSQL for relational data management. Automation enthusiast using GitHub Actions and Linux scripting.",
    },
    {
      title: "Clean Code & Testing",
      description: "Adherent to SOLID principles and TDD. Focused on writing maintainable, well-documented, and thoroughly tested code for enterprise environments.",
    }
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Expertise</h2>
                <p>My technical foundation is built on modern Java ecosystems and distributed systems architecture, focused on efficiency and scalability.</p>
                <Row>
                  {
                    skills.map((skill, index) => {
                      return (
                        <Col key={index} sm={6} md={6} className="mb-4">
                          <div className="skill-card p-4">
                            <h3>{skill.title}</h3>
                            <p className="mt-2">{skill.description}</p>
                          </div>
                        </Col>
                      )
                    })
                  }
                </Row>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
