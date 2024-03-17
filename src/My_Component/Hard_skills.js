import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Hard_skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skills" id="skills">
            <Container>
            
                <Row>
                    <Col>
                    <div className="skill-bxx">
                        <h2>
                            HARD SKILLS
                        </h2>
                        <p>
                         LANGUAGES <br/>
                        </p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            <div className="item">
                                <img src={meter1} alt='Image'></img>
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt='Image'></img>
                                <h5>C#</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt='Image'></img>
                                <h5>SQL</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt='Image'></img>
                                <h5>HTML/CSS</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt='Image'></img>
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt='Image'></img>
                                <h5>REACT</h5>
                            </div>
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}