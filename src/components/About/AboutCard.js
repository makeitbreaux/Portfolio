import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Briana </span>.
            I enjoy building beautiful software.
            <br />
            <br />
            In addition to programming, here are some other activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Geeking over Star Trek
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Guitar
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          “It is possible to commit no mistakes and still lose. That is not weakness, that is life.”{" "}
          </p>
          <footer className="blockquote-footer">Captain Picard</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;