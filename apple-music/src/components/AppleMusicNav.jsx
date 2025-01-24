import { Form, Navbar, Nav, Container, Button } from "react-bootstrap";

function AppleMusicNav() {
  return (
    <Navbar expand="md" id="nav" className="justify-content-md-start fs-5">
      <Container className="d-md-flex flex-md-column align-items-md-start">
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className="border-0 text-danger"
        />
        <Navbar.Brand href="#" className="d-flex align-items-center text-white">
          <p className="py-0 m-0 fs-3"></p>
          <p className="ps-1 py-0 m-0">Music</p>
        </Navbar.Brand>
        <Nav.Link className="text-danger">Accedi</Nav.Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-md-flex flex-md-column">
            <Form className="d-flex border-1 border rounded-2 p-1 my-3 sfondoInput">
              <Button type="submit" className="sfondoInput border-0 rounded-0">
                <i className="bi bi-search text-danger"></i>
              </Button>
              <Form.Control
                type="text"
                placeholder="Cerca"
                className="mr-sm-2 sfondoInput border-0 rounded-0"
              />
            </Form>
            <Nav.Link href="#home" className="ps-0 text-white">
              <i className="bi bi-house-door pe-2 text-danger"></i>Home
            </Nav.Link>
            <Nav.Link href="#link" className="ps-0 text-white">
              <i className="bi bi-grid pe-1 text-danger"></i> Novità
            </Nav.Link>
            <Nav.Link href="#link" className="ps-0 text-white">
              <i className="bi bi-broadcast pe-1 text-danger"></i> Radio
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppleMusicNav;
