import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            With an eye for design and a passion for organization, I create software that is easy to use and serves as a piece of functional art. I am logically minded and have a preference for back end development, but do not disappoint when it comes to front end development. 
              <br />
              <br />I am fluent in
              <i>
                <b className="purple"> Javascript, Python, and PostgreSQL. </b>
              </i>
              <br />
              <br />
              My specialties are building new &nbsp;
              <i>
                <b className="purple">Web Applications </b></i> and
                also in areas related to{" "}
                <i>
                <b className="purple">
                  Full-stack Software Development.
                </b>
              </i>
              <br />
              <br />
              I apply my passion for developing products
              with <i><b className="purple">Node.js</b></i> and 
              {" "}<i><b className="purple">Express</b></i>
              , utilizing UI frameworks such as
                <i><b className="purple">
                  {" "}
                  React
                </b></i>
                {" "}  and
                <i><b className="purple">
                  {" "}
                  MaterialUI
                </b></i>.             
              &nbsp; 
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/makeitbreaux"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MakeItBreaux"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/brianabreaux/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/make_it_breaux/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
