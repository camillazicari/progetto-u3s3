import { Col, Container, Row } from "react-bootstrap";
import PlayerBasso from "./PlayerBasso";

const AppleMusicFooter = () => {
  return (
    <Container fluid className="text-white pt-2" id="navCol">
      <Row className="mx-2 mt-4 mb-2">
        <Col xs={12}>
          <h3 className="footerText">
            Italia <span className=" text-white-50">| English {"(UK)"} </span>
          </h3>
        </Col>
      </Row>
      <Row className="mx-2 mt-4 mb-2">
        <Col xs={12}>
          <p className="footerText text-white-50">
            Copyright &copy; 2024{" "}
            <span className=" text-white">Apple Inc.</span> Tutti i diritti
            riservati
          </p>
        </Col>
      </Row>

      <Row className="mx-2 mt-4 mb-2 text-center" lg={5}>
        <Col xs={4} className=" pe-0">
          <p className="footerText2 text-white">
            Condizioni dei servizi internet{" "}
          </p>
        </Col>
        <Col xs={4} className=" pe-0">
          <p className="footerText2 text-white">Apple Music e privacy </p>
        </Col>

        <Col xs={4} className=" pe-0">
          <p className="footerText2 text-white">Avviso sui cookie</p>
        </Col>

        <Col xs={4} className=" pe-0">
          <p className="footerText2 text-white">Supporto</p>
        </Col>

        <Col xs={4} className=" pe-0">
          <p className="footerText2 text-white">Feedback</p>
        </Col>
      </Row>
      <Row className="d-flex d-lg-none mx-3 fixed-bottom bottom-0">
        <PlayerBasso />
      </Row>
    </Container>
  );
};

export default AppleMusicFooter;
