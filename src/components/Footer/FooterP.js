import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import { FaLinkedin } from "react-icons/fa";

import { logout } from "../../store/actions/usuarios/usuario";

import logo from "../../assets/logo.png";

const initialState = {
  clickLogin: false,
};

class FooterP extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onClickLogin = (value) => {
    this.setState({
      clickLogin: value,
    });
  };

  render(props) {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand
          href="#"
          onClick={() => {}}
          style={{
            color: "#6d6d73",
            alignItems: "center",
            height: "3.6em",
            marginLeft: "5em",
          }}
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

        <a style={{ fontWeight: 600, fontSize: "0.9em", width:"67%" }}>
          COPYRIGHT © 2021 - CURRICULEAD
        </a>

        <Button
          variant="outline-primary"
          style={{ padding: "0" }}
          href="https://www.linkedin.com/"
        >
          <FaLinkedin fontSize="2.5em" />
        </Button>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ usuario }) => {
  return {
    usuario,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(FooterP);
