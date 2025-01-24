import { Container, Row, Col, Card } from "react-bootstrap";

const Radio = () => {
  return (
    <Container fluid className="text-white mt-5">
      <Row className="mx-2 mt-4">
        <Col xs={12}>
          <h1 className=" display-6">
            Nuovi episodi radio <i className="bi bi-chevron-right fs-4"></i>
          </h1>
        </Col>
      </Row>
      <Row className="mx-2 flex-nowrap overflow-auto">
        <Col xs={4}>
          <Card className="bg-transparent border-0">
            <Card.Img
              variant="top"
              src="public/images/2a.png"
              className=" rounded-3"
            />
            <Card.Body className=" ps-0 py-1">
              <Card.Text className=" d-flex justify-content-between">
                <h3 className="descriptions">Pròlogo con Abuelo</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={4}>
          <Card className="bg-transparent border-0">
            <Card.Img
              variant="top"
              src="public/images/2b.png"
              className=" rounded-3"
            />
            <Card.Body className=" ps-0 py-1">
              <Card.Text>
                <h3 className="descriptions">The Wanderer</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={4}>
          <Card className="bg-transparent border-0">
            <Card.Img
              variant="top"
              src="public/images/2c.png"
              className=" rounded-3"
            />
            <Card.Body className=" ps-0 py-1">
              <Card.Text>
                <h3 className="descriptions">Michael Bublé & Carly Pearce</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={4}>
          <Card className="bg-transparent border-0">
            <Card.Img
              variant="top"
              src="public/images/2d.png"
              className=" rounded-3"
            />
            <Card.Body className=" ps-0 py-1">
              <Card.Text>
                <h3 className="descriptions">
                  Stephan Moccio: The Zane Lowe Interview
                </h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={4}>
          <Card className="bg-transparent border-0">
            <Card.Img
              variant="top"
              src="public/images/2e.png"
              className=" rounded-3"
            />
            <Card.Body className=" ps-0 py-1">
              <Card.Text>
                <h3 className="descriptions">
                  Chart Spotlight: Julia Michaels
                </h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Radio;
