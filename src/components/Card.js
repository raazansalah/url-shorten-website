import React from "react";
import "./Styles/card.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { fontWeight } from "@mui/system";
import detailed from "../assets/icon-brand-recognition.svg";
function CardComponent(props) {
  return (
    <Card
      style={{
        display: "inline-block",
        margin: "15px",
      }}
    >
      <div className="circle">
        <Card.Img variant="top" src={props.icon} style={{ width: "36px" }} />
      </div>
      <Card.Body className="card-body">
        <p style={{ fontWeight: "600", fontSize: "25px" }}>{props.title}</p>
        <Card.Text>{props.body}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
