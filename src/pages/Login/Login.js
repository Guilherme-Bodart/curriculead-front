import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import {
  autenticarUsuario,
  logout,
} from "../../store/actions/usuarios/usuario";

import "../../styles/App.css";
import logo from "../../assets/logo.png";

const initialState = {
  email: "",
  senha: "",
  logado: false,
};
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  onChangeSenha = (event) => {
    this.setState({
      senha: event.target.value,
    });
  };

  onChangeSenhaConfirmada = (event) => {
    this.setState({
      senhaConfirmada: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render(props) {
    if (this.props.usuario.logado) {
      return <Redirect to="/home" />;
    }
    return (
      <div className="App">
        <header className="App-header">
          <Image src={logo} className="App-logo" alt="logo" />
          <p className="App-text-logo">CurricuLEAD</p>
          <Form
            className="App-form"
            onSubmit={this.handleSubmit}
            style={{ width: "25em" }}
          >
            <Form.Group controlId="formBasicEmail" className="App-form-group">
              <Form.Label className="App-form-labelL">E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entre com seu e-mail"
                className="App-form-control"
                onChange={(value) => this.onChangeEmail(value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group
              controlId="formBasicPassword"
              className="App-form-group"
            >
              <Form.Label className="App-form-labelL">Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Senha"
                className="App-form-control"
                onChange={(value) => this.onChangeSenha(value)}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="App-button-login"
              onClick={async () => {
                var usuario = {
                  email: this.state.email,
                  senha: this.state.senha,
                };
                await this.props.autenticarUsuario(usuario);
              }}
            >
              <p className="App-text-button">Entrar</p>
            </Button>
            <Button
              href="http://localhost:3001/cadastro"
              variant="success"
              className="App-button-login"
            >
              <p className="App-text-button">Crie sua conta aqui</p>
            </Button>
            <Button
              href="http://localhost:3001/recuperar"
              variant="link"
              className="App-button-link"
            >
              <p className="App-text-button">Esqueceu sua senha?</p>
            </Button>
          </Form>
        </header>
      </div>
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
    autenticarUsuario: (usuario) => dispatch(autenticarUsuario(usuario)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
