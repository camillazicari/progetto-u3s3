//import { useState } from 'react'
import "./App.css";
import AppleMusicNav from "./components/AppleMusicNav";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import StaticMain from "./components/StaticMain";
import { Col, Container, Row } from "react-bootstrap";
import DynamicMain from "./components/DynamicMain";
import Altro from "./components/Altro";
import AppleMusicFooter from "./components/AppleMusicFooter";

function App() {
  return (
    <Container fluid className="d-md-flex p-0 overflow-hidden">
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
          <Row>
            <Col xs={12} className=" d-none d-lg-block px-0"></Col>
            <Col xs={12}>
              <StaticMain />
            </Col>
            <Col xs={12}>
              <DynamicMain />
            </Col>
            <Col xs={12}>
              <Altro />
            </Col>
            <Col xs={12} className="px-0">
              <AppleMusicFooter />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
