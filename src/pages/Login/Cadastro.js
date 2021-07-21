import React, { Component } from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../../styles/App.css";
import logo from "../../assets/logo.png";

class Cadastro extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className="App">
        <header className="App-header">
          <Image src={logo} className="App-logo" alt="logo" />
          <p className="App-text-logo">CurricuLEAD</p>
          <Form className="App-form">
            <Col>
              <Row>
                <Col>
                  <Form.Group controlId="nome">
                    <Form.Label className="App-form-labelC">
                      Nome completo
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nome Completo"
                      className="App-form-control"
                      required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group >
                    <Form.Label className="App-form-labelC">
                      Endereço
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Endereço"
                      className="App-form-control"
                      required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group className="App-form-groupC">
                    <Form.Label className="App-form-labelC">CPF</Form.Label>
                    <Form.Control
                      type="text"
                      maxLength="14"
                      placeholder="CPF"
                      className="App-form-control"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="App-form-groupC">
                    <Form.Label className="App-form-labelC">
                      Data de nascimento
                    </Form.Label>
                    <Form.Control
                      type="date"
                      className="App-form-control"
                      required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            </Col>

            <Row>
              <Col>
                <Form.Group
                  controlId="formBasicEmail"
                  className="App-form-groupC"
                >
                  <Form.Label className="App-form-labelC">Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Seu e-mail"
                    className="App-form-control"
                    required
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="App-form-groupC">
                  <Form.Label className="App-form-labelC">Telefone</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength="14"
                    placeholder="Telefone"
                    className="App-form-control"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  controlId="formBasicPassword"
                  className="App-form-groupC"
                >
                  <Form.Label className="App-form-labelC">Senha</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Senha"
                    className="App-form-control"
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formBasicPassword"
                  className="App-form-groupC"
                >
                  <Form.Label className="App-form-labelC">
                    Confirmação de senha
                  </Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Confirmação de Senha"
                    className="App-form-control"
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Button
              variant="primary"
              type="submit"
              className="App-button-login"
            >
              <p className="App-text-button">Criar conta</p>
            </Button>
            <Button href="http://localhost:3000/login" variant="success" className="App-button-login">
              <p className="App-text-button">Já tenho uma conta</p>
            </Button>
          </Form>
        </header>
      </div>
    );
  }
}

export default Cadastro;
