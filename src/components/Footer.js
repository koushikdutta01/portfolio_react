import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";



export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <h2>Portfolio</h2>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            
            <p>koushikd2004@gmail.com</p>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/koushikdutta01">
                <FontAwesomeIcon icon={faGithub} color="white" size="lg"/>
                  
                </a>
                <a href="https://twitter.com/koushikYCW">
                <FontAwesomeIcon icon={faTwitter} color="white" size="lg" />

                </a>
                <a href="https://www.linkedin.com/in/koushik-dutta-4370b718b/">
                <FontAwesomeIcon icon={faLinkedin} color="white" size="lg"/>
                  
                </a>
                <a href="https://www.instagram.com/_koushikdutta_/">
                  <FontAwesomeIcon icon={faInstagram} color="white" size="lg"/>
                </a>
                
                
              </div>
              
            </span>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
