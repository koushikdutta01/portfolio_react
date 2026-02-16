import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";

export const BlogPost = () => {
  const { id } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/content/blogs/${id}.md`)
      .then((res) => {
        if (!res.ok) throw new Error("Post not found");
        return res.text();
      })
      .then((text) => {
        setContent(text);
        setLoading(false);
        // SEO: Update page title
        const titleMatch = text.match(/^# (.*)/);
        if (titleMatch && titleMatch[1]) {
          document.title = `${titleMatch[1]} | ~/koushik`;
        }
      })
      .catch((err) => {
        setContent(`# 404: Post Not Found\nSorry, that note doesn't exist yet.`);
        setLoading(false);
        document.title = "404: Not Found | ~/koushik";
      });

    // Cleanup: Reset title when leaving the page
    return () => {
      document.title = "~/koushik";
    };
  }, [id]);

  return (
    <section className="blog-post-view">
      <Container>
        <Row>
          <Col lg={8} className="mx-auto">
            <Link to="/blogs" className="back-link mb-5 d-inline-flex align-items-center">
              <ArrowLeft className="me-2" /> Back to Archive
            </Link>
            
            {loading ? (
              <div className="loading-text">Loading post...</div>
            ) : (
              <div className="markdown-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {content}
                </ReactMarkdown>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
