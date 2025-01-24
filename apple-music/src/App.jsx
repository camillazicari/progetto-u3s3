//import { useState } from 'react'
import "./App.css";
import AppleMusicNav from "./components/AppleMusicNav";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import StaticMain from "./components/StaticMain";
import { Container } from "react-bootstrap";

function App() {
  return (
    <Container fluid className="d-md-flex p-0">
      <AppleMusicNav />
      <StaticMain />
    </Container>
  );
}

export default App;
