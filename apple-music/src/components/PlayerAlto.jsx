import { Container, Button } from "react-bootstrap";

const PlayerAlto = () => {
  return (
    <Container
      fluid
      className="bgPAlto d-flex justify-content-between px-3 align-items-center"
    >
      <div className="text-white-50 d-flex align-items-center">
        <i className="bi bi-shuffle fs-6 px-1"></i>
        <i className="bi bi-rewind-fill fs-4 px-1"></i>
        <i className="bi bi-play-fill fs-1 px-1"></i>
        <i className="bi bi-fast-forward-fill fs-4 px-1"></i>
        <i className="bi bi-repeat fs-6 px-1"></i>
      </div>
      <div className="bg-secondary w-50 d-flex justify-content-center align-items-center">
        <p className="p-0 m-0 fs-2 text-white"></p>
      </div>
      <div className="d-flex">
        <i className="bi bi-volume-up text-white-50 px-2"></i>
        <input
          type="range"
          className="form-range"
          id="volume-control"
          min="0"
          max="100"
        />
      </div>
      <div>
        <Button className=" bg-danger border-0">
          <i className="bi bi-person-fill text-white pe-1"></i>Accedi
        </Button>
      </div>
    </Container>
  );
};

export default PlayerAlto;
