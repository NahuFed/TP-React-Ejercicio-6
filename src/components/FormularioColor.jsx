import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import GrillaColores from "./GrillaColores";

const FormularioColor = () => {
  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Administrar colores</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form id="formulario">
            <Form.Group
              className="mb-3 d-flex align-items-center justify-content-around"
              controlId="exampleForm.ControlTextarea1"
            >
                
                <div className="cajaColorida" style={{backgroundColor: "red",width: "10rem", height: "8rem"}}></div>
              <Form.Control
                type="text"
                placeholder="Ingrese un color ej Blue"
                style={{height: "2.5rem", width: "50%"}}
              />

                
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button type="submit" form="formulario">Guardar</Button>
        </Card.Footer>
      </Card>
      <GrillaColores></GrillaColores>
    </>
  );
};

export default FormularioColor;
