import React from "react";
import {  Row } from "react-bootstrap";
import Color from "./Color";

const GrillaColores = ({arrayColores}) => {
  return (
    <Row className="mt-5">
        {
            arrayColores.map((color,indiceColor)=> <Color color = {color} key={indiceColor}></Color>)
        }
    </Row>
  );
};

export default GrillaColores;
