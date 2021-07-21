import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import "../../styles/App.css";
import logo from "../../assets/logo.png";

class MudarSenha extends Component {
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
              <Form.Label className="App-form-labelL">
                Nova senha
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Nova senha"
                className="App-form-control"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicEmail" className="App-form-group">
              <Form.Label className="App-form-labelL">
                Confirme a nova senha
              </Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirme a nova senha"
                className="App-form-control"
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="App-button-login"
            >
              <p className="App-text-button">Enviar</p>
            </Button>
            <Button href="http://localhost:3000/login" variant="success" className="App-button-login">
              <p className="App-text-button">Voltar para o login</p>
            </Button>
          </Form>
        </header>
      </div>
    );
  }
}

export default MudarSenha;
