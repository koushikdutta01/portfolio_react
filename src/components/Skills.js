
import code from "../assets/img/code.png"
import deign from "../assets/img/deign.png";
import writer from "../assets/img/writer.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';



export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>"Skills" section showcases my expertise and proficiencies, including web development, design, problem-solving, and communication skills.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={code} alt="Image" />
                                <h5>Web Development</h5>
                                <p>I have mid-level expertise in MERN stack development, including React, Node.js, and MongoDB. I'm confident in my ability to build efficient and scalable web applications using these technologies.</p>
                            </div>
                            <div className="item">
                                <img src={deign} alt="Image" />
                                <h5>Web Design</h5>
                                <p>My minimal web designs prioritize clean, uncluttered layouts and simple yet impactful visual elements. By emphasizing essential information and negative space, I create memorable and effective user experiences.</p>
                            </div>
                            <div className="item">
                                <img src={writer} alt="Image" />
                                <h5>Writer</h5>
                                <p>I am a versatile writer who crafts blog posts and tweets with equal skill. By tailoring my approach to the audience and medium, I deliver engaging and informative content that resonates with readers.</p>
                            </div>
                            
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image" /> */}
    </section>
  )
}
