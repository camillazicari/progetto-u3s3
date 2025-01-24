import { Container, Row, Col, Card } from "react-bootstrap";

const Novita = () => {
  return (
    <Container fluid className="text-white">
      <Row className="mx-2 mt-4">
        <Col xs={12}>
          <h1 className=" display-5 fw-bold">Novità</h1>
          <hr className="my-1" />
        </Col>
      </Row>
      <Row className="mx-2 flex-nowrap overflow-auto align-items-end">
        <Col xs={8} md={6}>
          <Card className="bg-transparent border-0">
            <Card.Body className="ps-0">
              <Card.Text>
                <h3 className="fs-6 text-white-50 mb-0">
                  NUOVA STAZIONE RADIO
                </h3>
                <p className="text-white testiNovita mb-1">
                  Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="public/images/1a.png"
              className=" rounded-3"
            />
          </Card>
        </Col>
        <Col xs={8} md={6}>
          <Card className="bg-transparent border-0">
            <Card.Body className="ps-0">
              <Card.Text>
                <h3 className="fs-6 text-white-50 mb-0">
                  NUOVA STAZIONE RADIO
                </h3>
                <p className="text-white testiNovita mb-1">
                  Ecco la nuova casa della musica latina
                </p>
              </Card.Text>
            </Card.Body>
            <Card.Img
              variant="bottom"
              src="public/images/1b.png"
              className=" rounded-3"
            />
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Novita;
