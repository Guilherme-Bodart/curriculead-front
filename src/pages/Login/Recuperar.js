import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import { enviarEmailReset } from "../../store/actions/usuarios/usuario";

import "../../styles/App.css";
import logo from "../../assets/logo.png";

const initialState = {
  email: "",
};
class Recuperar extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChangeEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render(props) {
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
              <Form.Label className="App-form-labelL">
                Informe seu e-mail
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Entre com seu e-mail"
                className="App-form-control"
                onChange={(value) => this.onChangeEmail(value)}
                required
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="App-button-login"
              onClick={async () => {
                console.log("teste");
                await this.props.enviarEmailReset(this.state.email);
              }}
            >
              <p className="App-text-button">Enviar</p>
            </Button>
            <Button
              href="http://localhost:3001/login"
              variant="success"
              className="App-button-login"
            >
              <p className="App-text-button">Voltar para o login</p>
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
    enviarEmailReset: (email) => dispatch(enviarEmailReset(email)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Recuperar);
