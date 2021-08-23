import React, { Component } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import logo from "../../assets/logo.png"

const initialState = {};

class NavbarP extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render(props) {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand
          href="#"
          onClick={() => {}}
          style={{ color: "#666", alignItems: "center", height: "3.6em" }}
        >
            <Image src={logo} className="App-logo-main" alt="logo" />
          <p
            style={{
              marginLeft: "0.64em",
              fontSize: "1.1em",
              fontWeight: "500",
            }}
          >
            {" "}
            CurricuLEAD
          </p>
        </Navbar.Brand>

        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Sobre</Nav.Link>
          <Nav.Link href="#link">Criar Currículo</Nav.Link>
          <Button variant="light" style={{ height: "3em" }} onClick={() => {}}>
            <p style={{ fontSize: "1.4em" }}>Sair</p>
          </Button>
        </Nav>
      </Navbar>
    );
  }
}

export default NavbarP;
