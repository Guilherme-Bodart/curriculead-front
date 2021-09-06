import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import swal from "sweetalert";

import { recuperarSenha } from "../../store/actions/usuarios/usuario";

import "../../styles/App.css";
import logo from "../../assets/logo.png";

const initialState = {
  senha: "",
  senhaConfirmada: "",
};
class MudarSenha extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

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
              <Form.Label className="App-form-labelL">Nova senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Nova senha"
                className="App-form-control"
                onChange={(value) => this.onChangeSenha(value)}
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
                onChange={(value) => this.onChangeSenhaConfirmada(value)}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="App-button-login"
              onClick={async () => {
                if (
                  this.state.senha != "" &&
                  this.state.senhaConfirmada != ""
                ) {
                  if (this.state.senha === this.state.senhaConfirmada) {
                    await this.props.recuperarSenha({
                      senha: this.state.senha,
                      token: this.props.match.params.token,
                    });
                  } else {
                    swal({
                      title: "Error",
                      text: "Falha no envio, senhas não coincidem",
                      icon: "error",
                    });
                  }
                }
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
    recuperarSenha: (usuario) => dispatch(recuperarSenha(usuario)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MudarSenha));
