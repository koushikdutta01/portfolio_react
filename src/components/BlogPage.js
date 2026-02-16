import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { blogs } from "../constants/blogs";
import 'animate.css';

export const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.summary.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="blog-page" id="blog-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} className="text-center mb-5">
            <h2 className="animate__animated animate__fadeInDown">All Blogs</h2>
            <p className="blog-subtitle animate__animated animate__fadeIn">
              Explaining concepts as I learn them. Total of {blogs.length} notes available.
            </p>
            <div className="search-container animate__animated animate__fadeInUp">
              <span className="search-prefix">$ grep -i</span>
              <input
                type="text"
                className="search-input"
                placeholder="'keyword' ..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </Col>
        </Row>
        <Row>
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <Col key={index} sm={6} md={6} lg={4} className="mb-4">
                <div className="blog-card h-100">
                  <span className="blog-date">{blog.date}</span>
                  <h3>{blog.title}</h3>
                  <p>{blog.summary}</p>
                  <Link to={`/blog/${blog.id}`} className="read-more">Read Note →</Link>
                </div>
              </Col>
            ))
          ) : (
            <Col className="text-center mt-5">
              <p className="no-results">No matches found for <span className="highlight">"{searchTerm}"</span> in archive.</p>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};
