import React, { useEffect, useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import GrillaColores from "./GrillaColores";

const FormularioColor = () => {
  let coloresDelLocalStorage =
    JSON.parse(localStorage.getItem("grillaColores")) || [];
  const [color, setColor] = useState("");
  const [arrayColores, setArrayColores] = useState(coloresDelLocalStorage);

  useEffect(() => {
    localStorage.setItem("grillaColores", JSON.stringify(arrayColores));
  }, [arrayColores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArrayColores([...arrayColores, color]);
    setColor("");
    console.log(arrayColores);
  };

  return (
    <>
      <Card>
        <Card.Header>
          <Card.Title>Administrar colores</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit} id="formulario">
            <Form.Group
              className="mb-3 d-flex align-items-center justify-content-around"
              controlId="color"
            >
              <div
                className="cajaColorida"
                style={{
                  backgroundColor: "red",
                  width: "10rem",
                  height: "8rem",
                }}
              ></div>
              <Form.Control
                type="text"
                placeholder="Ingrese un color ej Blue"
                style={{ height: "2.5rem", width: "50%" }}
                value={color}
                onChange={(e) => setColor(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-end">
          <Button type="submit" form="formulario">
            Guardar
          </Button>
        </Card.Footer>
      </Card>
      <GrillaColores arrayColores={arrayColores}></GrillaColores>
    </>
  );
};

export default FormularioColor;
