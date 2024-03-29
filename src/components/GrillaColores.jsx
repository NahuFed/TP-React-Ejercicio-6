import React, { useEffect } from "react";
import {  Row } from "react-bootstrap";
import Color from "./Color";


const GrillaColores = ({arrayColores, borrarColor}) => {

  return (
    <Row className="mt-5">
        {
            arrayColores.map((color,indiceColor)=> <Color color = {color} key={indiceColor} borrarColor ={borrarColor} indice={indiceColor} ></Color>)            
        }
    </Row>
  );
};

export default GrillaColores;
