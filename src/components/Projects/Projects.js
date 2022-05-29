import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BFhome from "../../Assets/BFhome.png";
import MoChome from "../../Assets/MoC.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are my two favorite projects!
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BFhome}
              isBlog={false}
              title="BookFriend"
              description="Book Friend offers users the opportunity to search their favorite author’s information as well as a comprehensive list of all of the author’s works. The back-end side of Book Friend was built using Express and Node, utilizing jsonchema to validate JSON documents, and jsonwebtoken and bcrypt to authorize and authenticate users. The front-end side was built using React and Bootstrap 4. PostgreSQL was chosen as the database, and testing was done using Jest and React Testing Library."
              link="https://book-friend.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={MoChome}
              isBlog={false}
              title="Moment-of-Clarity"
              description="PMoment of Clarity offers people in sobriety a guide to alcohol-free mocktails. Moment of Clarity was built with Python, using Flask as the framework, and PostgreSQL as the database.  Flask-SQLAlchemy was chosen as the ORM, Flask-WTForms to authenticate forms in the application, and Flask-Bcrypt to authorize and authenticate user information. Data was taken and cleaned from TheCocktailDB."
              link="https://momentofclarity.herokuapp.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;