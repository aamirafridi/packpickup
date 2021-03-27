import "./Home.css";

import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";

export const Home: FunctionComponent = () => {
  return (
    <>
      <div
        style={{
          background: "#ddd",
          textAlign: "center",
          padding: 100,
        }}
      >
        Banner
      </div>
      <Container>
        {/* <Link to="/detail">Go to Detail</Link> */}
        <Row>
          <Col xs="12">
            <h1 className="home-h1">
              Hire! Packing and Transportation services
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
};
