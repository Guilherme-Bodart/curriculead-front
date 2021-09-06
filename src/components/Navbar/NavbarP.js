import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import { logout } from "../../store/actions/usuarios/usuario";

import logo from "../../assets/logo.png";

const initialState = {
  clickLogin: false,
};

class NavbarP extends Component {
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
    const botaoSair = this.props.usuario.logado ? (
      <Button
        variant="light"
        style={{ height: "3em" }}
        onClick={() => {
          this.props.logout();
        }}
      >
        <p style={{ fontSize: "1.2em", fontWeight: "500", color: "#6d6d73" }}>
          Deslogar
        </p>
      </Button>
    ) : (
      ""
    );

    const botaoCurriculo = this.props.usuario.curriculo[0] ? (
      <Nav.Link style={{ color: "#6d6d73" }} href="#link">
        Atualizar Currículo
      </Nav.Link>
    ) : (
      <Nav.Link style={{ color: "#6d6d73" }} href="#link">
        Criar Currículo
      </Nav.Link>
    );

    const botaoMeuCurriculo = this.props.usuario.logado ? (
      <Nav.Link style={{ color: "#6d6d73" }} href="/meucurriculo">
        Meu Currículo
      </Nav.Link>
    ) : ''

    if (this.state.clickLogin) {
      return <Redirect to="/login" />;
    }

    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand
          href="#"
          onClick={() => {}}
          style={{ color: "#6d6d73", alignItems: "center", height: "3.6em" }}
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

        <Nav
          className="ml-auto"
          style={{ width: "77%", justifyContent: "space-evenly" }}
        >
          <Nav.Link style={{ color: "#6d6d73" }} href="#home">
            Home
          </Nav.Link>
          <Nav.Link style={{ color: "#6d6d73" }} href="#link">
            Sobre
          </Nav.Link>
          {botaoCurriculo}
          {botaoMeuCurriculo}
          <Nav.Link
            style={{ color: "#6d6d73" }}
            onClick={() => {
              this.onClickLogin(true);
            }}
          >
            Login
          </Nav.Link>
        </Nav>
        {botaoSair}
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
export default connect(mapStateToProps, mapDispatchToProps)(NavbarP);
