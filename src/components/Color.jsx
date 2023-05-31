import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';



const Color = ({color,borrarColor,indice}) => {
 
    return (
        <Col xs={12} md={6} lg={4} className='mb-4' >
        <Card>
          <Card.Header>
            <Card.Title>{color}</Card.Title>
          </Card.Header>
          <Card.Body className="d-flex justify-content-center">
            <div
              className="cajaColorida"
              style={{
                backgroundColor: color,
                width: "10rem",
                height: "8rem",
              }}
            ></div>
          </Card.Body>
          <Card.Footer className="d-flex justify-content-end">
            <Button variant="danger" onClick={()=> borrarColor(indice)}>
              Borrar
            </Button>
          </Card.Footer>
        </Card>
      </Col>
    );
};

export default Color;