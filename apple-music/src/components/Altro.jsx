/* eslint-disable react/no-unescaped-entities */
import { Col, Container, Row, Button } from "react-bootstrap";

const Altro = () => {
  return (
    <Container fluid className="text-white">
      <Row className="mx-2 mt-4 mb-2">
        <Col xs={12}>
          <h1 className="display-6">Altro da esplorare</h1>
        </Col>
      </Row>
      <Row className="mx-2 mb-2">
        <Col xs={12} lg={4} className="mb-2">
          <Button className="w-100 text-danger text-start border-0 d-flex justify-content-between align-items-center fs-5 p-3 Bottoni">
            <span className="testoSpan">Esplora per genere</span>
            <span className="testoSpan">
              <i className="bi bi-chevron-right"></i>
            </span>
          </Button>
        </Col>

        <Col xs={12} lg={4} className="mb-2">
          <Button className="w-100 text-danger text-start border-0 d-flex justify-content-between align-items-center fs-5 p-3 Bottoni">
            <span className="testoSpan">Decenni</span>
            <span className="testoSpan">
              <i className="bi bi-chevron-right"></i>
            </span>
          </Button>
        </Col>

        <Col xs={12} lg={4} className="mb-2">
          <Button className="w-100 text-danger text-start border-0 d-flex justify-content-between align-items-center fs-5 p-3 Bottoni">
            <span className="testoSpan">Attività e stati d'animo</span>
            <span className="testoSpan">
              <i className="bi bi-chevron-right"></i>
            </span>
          </Button>
        </Col>

        <Col xs={12} lg={4} className="mb-2">
          <Button className="w-100 text-danger text-start border-0 d-flex justify-content-between align-items-center fs-5 p-3 Bottoni">
            <span className="testoSpan">Worldwide</span>
            <span className="testoSpan">
              <i className="bi bi-chevron-right"></i>
            </span>
          </Button>
        </Col>

        <Col xs={12} lg={4} className="mb-2">
          <Button className="w-100 text-danger text-start border-0 d-flex justify-content-between align-items-center fs-5 p-3 Bottoni">
            <span className="testoSpan">Classifiche</span>
            <span className="testoSpan">
              <i className="bi bi-chevron-right"></i>
            </span>
          </Button>
        </Col>

        <Col xs={12} lg={4} className="mb-2">
          <Button className="w-100 text-danger text-start border-0 d-flex justify-content-between align-items-center fs-5 p-3 Bottoni">
            <span className="testoSpan">Audio spaziale</span>
            <span className="testoSpan">
              <i className="bi bi-chevron-right"></i>
            </span>
          </Button>
        </Col>

        <Col xs={12} lg={4} className="mb-2">
          <Button className="w-100 text-danger text-start border-0 d-flex justify-content-between align-items-center fs-5 p-3 Bottoni">
            <span className="testoSpan">Video musicali</span>
            <span className="testoSpan">
              <i className="bi bi-chevron-right"></i>
            </span>
          </Button>
        </Col>

        <Col xs={12} lg={4} className="mb-2">
          <Button className="w-100 text-danger text-start border-0 d-flex justify-content-between align-items-center fs-5 p-3 Bottoni">
            <span className="testoSpan">Nuovi artisti</span>
            <span className="testoSpan">
              <i className="bi bi-chevron-right"></i>
            </span>
          </Button>
        </Col>

        <Col xs={12} lg={4} className="mb-2">
          <Button className="w-100 text-danger text-start border-0 d-flex justify-content-between align-items-center fs-5 p-3 Bottoni">
            <span className="testoSpan">Hit del passato</span>
            <span className="testoSpan">
              <i className="bi bi-chevron-right"></i>
            </span>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Altro;
