//import { useState } from 'react'
import "./App.css";
import AppleMusicNav from "./components/AppleMusicNav";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import StaticMain from "./components/StaticMain";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="d-md-flex p-0">
      <Row>
        <Col
          xs={12}
          md={3}
          className="pe-0 d-md-flex justify-content-center align-items-start"
          id="navCol"
        >
          <AppleMusicNav />
        </Col>
        <Col xs={12} md={9}>
          <StaticMain />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
