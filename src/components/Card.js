import React from "react";
import "./Styles/card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { fontWeight } from "@mui/system";

function CardComponent(props) {
  return (
    <Card
      style={{
        display: "inline-block",
        margin: "15px",
      }}
    >
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body className="card-body">
        <p style={{ fontWeight: "600", fontSize: "25px" }}>{props.title}</p>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
