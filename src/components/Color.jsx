import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';



const Color = () => {
    return (
        <Col xs={4}>
        <Card>
          <Card.Header>
            <Card.Title>Nombre Color</Card.Title>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center">
            <div
              className="cajaColorida"
              style={{
                backgroundColor: "blue",
                width: "10rem",
                height: "8rem",
              }}
            ></div>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="danger" type="submit" form="formulario">
              Borrar
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default Color;