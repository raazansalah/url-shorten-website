import React from "react";
import { useRef } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logoblack.svg";

export default function NavBar() {
  const navRef = useRef();
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };
  return (
    <Navbar bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
          <img alt="logo" src={logo} width="150px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px", fontWeight: "500" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Featuers</Nav.Link>
            <Nav.Link href="#action2">Pricing</Nav.Link>
            <Nav.Link href="#action2">Recourses</Nav.Link>
          </Nav>
          <Button className="btn-login">Login</Button>
          <Button className="btn">Signup</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
