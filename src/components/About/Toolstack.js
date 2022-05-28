import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiInsomnia,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import {
  DiUbuntu
} from "react-icons/di";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
        <h5>Linux</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
        <h5>VSCode</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiInsomnia />
        <h5>Insomnia</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiUbuntu />
        <h5>Ubuntu</h5>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />
        <h5>Heroku</h5>
      </Col>
    </Row>
  );
}

export default Toolstack;
