import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import headerImg from "../assets/img/headerimg.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

import { HashLink } from 'react-router-hash-link';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "Java/Spring Boot", "Linux Enthusiast", "Cloud Native", "Docker & Kubernetes", "Geeked out for tech"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 4);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  <h1>{`I'm `}
                    <span style={{ color: '#03C988', textShadow: '0 0 5px rgba(3, 201, 136, 0.4)' }}>Koushik</span>
                  </h1>

                  <h3>
                    <span className="txt-rotate" style={{ fontFamily: '"Source Code Pro", monospace' }}>
                      <span style={{ color: '#03C988' }}>$</span> <span className="wrap">{text}</span>
                    </span>
                  </h3>
                  <p>Software Engineer specializing in building scalable backend systems with Java 21, Spring Boot 3.x, and Microservices architecture. Currently focused on mastering system-wide observability, Docker-based deployments, and clean code practices. Let's build something efficient and impactful.</p>
                  
                  <div className="banner-expertise mb-5">
                    <span className="expertise-label">[stack]:</span>
                    <Row className="mt-3">
                      <Col xs={6} md={3} className="mb-3 mb-md-0">
                        <div className="skill-block">
                          <h5>Backend</h5>
                          <div className="skill-tags">Java | SpringBoot | JPA</div>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="mb-3 mb-md-0">
                        <div className="skill-block">
                          <h5>System</h5>
                          <div className="skill-tags">Microservices | Design</div>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="mb-3 mb-md-0">
                        <div className="skill-block">
                          <h5>Infra</h5>
                          <div className="skill-tags">Docker | Postgres | Linux</div>
                        </div>
                      </Col>
                      <Col xs={6} md={3} className="mb-3 mb-md-0">
                        <div className="skill-block">
                          <h5>Quality</h5>
                          <div className="skill-tags">CleanCode | TDD | SOLID</div>
                        </div>
                      </Col>
                    </Row>
                  </div>

                  <HashLink to="/#connect" style={{ textDecoration: 'none' }}>
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </HashLink>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
