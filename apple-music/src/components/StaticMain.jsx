import { Container, Row, Col } from "react-bootstrap";

const StaticMain = () => {
  return (
    <Container fluid className="text-white">
      <Row className="mx-2 mt-4">
        <Col xs={12}>
          <h1 className=" display-5 fw-bold">Novità</h1>
          <hr className="my-1" />
        </Col>
      </Row>
    </Container>
  );
};

export default StaticMain;
