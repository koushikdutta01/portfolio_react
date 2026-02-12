import { Container, Row, Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Blog = () => {
  const blogs = [
    {
      title: "Mastering Java Exception Handling",
      date: "Feb 10, 2026",
      summary: "A deep dive into Checked vs Unchecked exceptions and building custom exception handlers in Spring Boot.",
      link: "https://github.com/koushikdutta01/java_learning"
    },
    {
      title: "Networking Essentials for Developers",
      date: "Feb 5, 2026",
      summary: "Understanding TCP/IP, Subnetting, and IP security for robust microservices communication.",
      link: "https://github.com/koushikdutta01/my_notes"
    },
    {
      title: "Fedora Linux: A Developer's Paradise",
      date: "Jan 28, 2026",
      summary: "Why I switched to Fedora and how I automated my system configuration backups.",
      link: "https://github.com/koushikdutta01/system-backup"
    }
  ];

  return (
    <section className="blog" id="blog">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Learnings & Blog</h2>
                <p>I believe in the 'Learn in Public' philosophy. Here are my notes, thoughts, and technical deep dives into the technologies I use every day.</p>
                <Row>
                  {
                    blogs.map((blog, index) => {
                      return (
                        <Col key={index} sm={6} md={6} className="mb-4">
                          <div className="blog-card">
                            <h3>{blog.title}</h3>
                            <span className="blog-date">{blog.date}</span>
                            <p className="mt-2">{blog.summary}</p>
                            <a href={blog.link} target="_blank" rel="noreferrer" className="read-more">Read Full Note →</a>
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
