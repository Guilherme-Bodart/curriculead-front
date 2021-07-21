import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "../../styles/App.css";
import logo from "../../assets/logo.png";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <Image src={logo} className="App-logo" alt="logo" />
          <p className="App-text-logo">CurricuLEAD</p>
          <Form className="App-form" onSubmit={this.handleSubmit}>
            <Form.Group controlId="formBasicEmail" className="App-form-group">
              <Form.Label className="App-form-labelL">E-mail</Form.Label>
              <Form.Control
                type="email"
                placeholder="Entre com seu e-mail"
                className="App-form-control"
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
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="App-button-login"
              href="http://localhost:3000/home"
            >
              <p className="App-text-button">Entrar</p>
            </Button>
            <Button href="http://localhost:3000/cadastro" variant="success" className="App-button-login">
              <p className="App-text-button">Crie sua conta aqui</p>
            </Button>
            <Button href="http://localhost:3000/recuperar" variant="link" className="App-button-link">
              <p className="App-text-button">Esqueceu sua senha?</p>
            </Button>
          </Form>
        </header>
      </div>
    );
  }
}

export default Login;
