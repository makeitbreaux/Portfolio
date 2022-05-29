import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPostgresql,
  DiPython,
  DiGit
} from "react-icons/di";
import {
  SiExpress,
  SiJasmine,
  SiJest,
  SiMaterialui
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h5>JavaScript</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        <h5>Python</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h5>React</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
        <h5>Express</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPostgresql />
        <h5>PostgreSQL</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <h5>Node.js</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJest />
        <h5>Jest</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJasmine />
        <h5>Jasmine</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMaterialui />
        <h5>MaterialUI</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <h5>Git/GitHub</h5>
      </Col>
    </Row>
  );
}

export default Techstack;