import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

export const ProductsList = (props) => {
  return (
    <Container className="py-5">
      <h2 className="text-center fw-bold">{props.title}</h2>
      <Row>
        {props.data.map((item, index) => (
          <Col lg={3} md={4} className="mb-3">
            <Card>
              <Card.Img variant="top" src={item.image} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>
                  {item.description}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
