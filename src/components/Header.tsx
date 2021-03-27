import { FunctionComponent } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header: FunctionComponent = () => {
  return (
    <Container fluid="md">
      <Row>
        <Col xs="12" style={{ textAlign: "center", marginTop: 12 }}>
          <Link to="/">
            <img
              width="300px"
              src={`${process.env.PUBLIC_URL}/logo.svg`}
              alt="Pack pickup"
            />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
