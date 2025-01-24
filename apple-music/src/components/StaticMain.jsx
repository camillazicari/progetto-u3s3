import { Col, Row } from "react-bootstrap";
import Novita from "./Novita";
import Radio from "./Radio";

const StaticMain = () => {
  return (
    <>
      <Row>
        <Col md={12}>
          <Novita />
        </Col>

        <Col md={12}>
          <Radio />
        </Col>
      </Row>
    </>
  );
};

export default StaticMain;
