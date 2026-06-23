import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { blogs } from "../constants/blogs";

export const Blog = () => {
  // Only show the first 4 blogs on the main page
  const displayBlogs = blogs.slice(0, 4);

  return (
    <section className="blog" id="blog">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Learnings & Blog</h2>
                <p>I believe in the 'Learn in Public' philosophy. Here are my notes, thoughts, and technical deep dives into the technologies I use every day.</p>
                <Row>
                  {
                    displayBlogs.length > 0 ? (
                      displayBlogs.map((blog, index) => {
                        return (
                          <Col key={index} sm={6} md={6} className="mb-4">
                            <div className="blog-card">
                              <h3>{blog.title}</h3>
                              <span className="blog-date">{blog.date}</span>
                              <p className="mt-2">{blog.summary}</p>
                              <Link to={`/blog/${blog.id}`} className="read-more">Read Full Note →</Link>
                            </div>
                          </Col>
                        )
                      })
                    ) : (
                      <Col className="text-center mb-4">
                        <div className="blog-card empty-state" style={{ borderStyle: 'dashed', borderColor: '#03C988' }}>
                          <p style={{ color: "#03C988", fontFamily: '"Source Code Pro", monospace', margin: 0, fontSize: "1.1rem" }}>
                            $ cat blogs.txt<br/>
                            No notes found. Keep checking!
                          </p>
                        </div>
                      </Col>
                    )
                  }
                </Row>
                <div className="text-center mt-5">
                  <Link to="/blogs" className="vvd-button" style={{ textDecoration: 'none' }}>
                    <button className="vvd"><span>All Blogs</span></button>
                  </Link>
                </div>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
