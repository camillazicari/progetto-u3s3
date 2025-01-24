import { Container } from "react-bootstrap";

const PlayerBasso = () => {
  return (
    <Container id="playerBg" className="rounded-3 py-2">
      <div className="card bg-transparent text-white-50 my-0 border-0">
        <div className="row g-0 my-0 align-items-center justify-content-between">
          <div className="col-4 imgPlayerDiv my-0">
            <img
              src="public/images/2f.png"
              className="img-fluid rounded-3"
              alt="..."
            />
          </div>
          <div className="col-8 my-0">
            <div className="card-body my-0 p-0">
              <h5 className="card-title p-0 mb-0 d-flex align-items-center justify-content-end">
                <i className="bi bi-play-fill display-4 pe-3"></i>
                <i className="bi bi-fast-forward-fill display-6"></i>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default PlayerBasso;
