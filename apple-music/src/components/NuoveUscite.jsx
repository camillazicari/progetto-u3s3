/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const NuoveUscite = () => {
  const [artist, setArtist] = useState([]);
  const [slicedElements, setSlicedElements] = useState([]);

  const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=brunomars`;

  const GetSong = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log("ECCO L'ARTISTA':", data);
        setArtist(data.data);
      } else {
        throw new Error("Errore nel recupero dei dati");
      }
    } catch {
      console.log("ERRORE", Error);
    }
  };

  const handleResize = () => {
    const width = window.innerWidth;
    if (width >= 992) {
      setSlicedElements(artist.slice(0, 10));
    } else {
      setSlicedElements(artist.slice(0, 6));
    }
  };

  useEffect(() => {
    GetSong();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [artist]);

  return (
    <Container fluid className="text-white">
      <Row className="mx-2 mt-4 mb-2">
        <Col xs={12}>
          <h1 className="display-6">
            Nuove uscite <i className="bi bi-chevron-right fs-4"></i>
          </h1>
        </Col>
      </Row>
      <Row lg={5} className="mx-2 justify-content-md-around">
        {slicedElements.map((song) => {
          return (
            <Col xs={4} key={song.id}>
              <Card className="bg-transparent border-0">
                <Card.Img
                  variant="top"
                  src={song.album.cover_big}
                  className=" rounded-3"
                />
                <Card.Body className=" ps-0 py-1">
                  <Card.Text className="ms-2">
                    <h3 className="descriptions mb-0">{song.title}</h3>
                    <p className="descriptions">{song.artist.name}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default NuoveUscite;
