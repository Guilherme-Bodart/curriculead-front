import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import swal from "sweetalert";

import { criarUsuario } from "../../store/actions/usuarios/usuario";

import "../../styles/App.css";
import logo from "../../assets/logo.png";

const initialState = {
  email: "",
  senha: "",
  senhaConfirmada: "",
  nome: "",
  dataNascimento: "",
  telefone: "",
  estado: "",
  cidade: "",
  bairro: "",
  rua: "",
  complemento: "",
  linkedin: "",
  genero: "",
  sexo: "",
};
class Cadastro extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChangeNome = (event) => {
    this.setState({
      nome: event.target.value,
    });
  };

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

  onChangeTelefone = (event) => {
    this.setState({
      telefone: event.target.value,
    });
  };

  onChangeDataNascimento = (event) => {
    this.setState({
      dataNascimento: event.target.value,
    });
  };

  onChangeLinkedin = (event) => {
    this.setState({
      linkedin: event.target.value,
    });
  };

  onChangeEstado = (event) => {
    this.setState({
      estado: event.target.value,
    });
  };

  onChangeCidade = (event) => {
    this.setState({
      cidade: event.target.value,
    });
  };

  onChangeBairro = (event) => {
    this.setState({
      bairro: event.target.value,
    });
  };

  onChangeRua = (event) => {
    this.setState({
      rua: event.target.value,
    });
  };

  onChangeComplemento = (event) => {
    this.setState({
      complemento: event.target.value,
    });
  };

  onChangeGenero = (value) => {
    this.setState({
      genero: value,
    });
  };

  onChangeSexo = (value) => {
    this.setState({
      sexo: value,
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
          <Form className="App-form" onSubmit={this.handleSubmit}>
            <Col>
              <Row>
                <Col>
                  <Form.Group controlId="email">
                    <Form.Label className="App-form-labelC">E-mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="E-mail"
                      className="App-form-control"
                      onChange={(value) => this.onChangeEmail(value)}
                      required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
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
                      onChange={(value) => this.onChangeSenha(value)}
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
                      onChange={(value) => this.onChangeSenhaConfirmada(value)}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group controlId="nome">
                    <Form.Label className="App-form-labelC">
                      Nome Completo
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Nome Completo"
                      className="App-form-control"
                      onChange={(value) => this.onChangeNome(value)}
                      required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="linkedin">
                    <Form.Label className="App-form-labelC">
                      Linkedin
                    </Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Link do Linkedin"
                      className="App-form-control"
                      onChange={(value) => this.onChangeLinkedin(value)}
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="estado">
                    <Form.Label className="App-form-labelC">Estado</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Estado"
                      className="App-form-control"
                      onChange={(value) => this.onChangeEstado(value)}
                      required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="App-form-groupC" controlId="cidad" e>
                    <Form.Label className="App-form-labelC">Cidade</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Cidade"
                      className="App-form-control"
                      onChange={(value) => this.onChangeCidade(value)}
                      required
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="App-form-groupC" controlId="bairro">
                    <Form.Label className="App-form-labelC">Bairro</Form.Label>
                    <Form.Control
                      type="text"
                      className="App-form-control"
                      placeholder="Bairro"
                      onChange={(value) => this.onChangeBairro(value)}
                      required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group className="App-form-groupC" controlId="rua">
                    <Form.Label className="App-form-labelC">Rua</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Rua"
                      className="App-form-control"
                      onChange={(value) => this.onChangeRua(value)}
                      required
                    />
                    <Form.Text className="text-muted"></Form.Text>
                  </Form.Group>
                </Col>
              </Row>
            </Col>

            <Row>
              <Col>
                <Form.Group className="App-form-groupC" controlId="complemento">
                  <Form.Label className="App-form-labelC">
                    Complemento
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Complemento"
                    onChange={(value) => this.onChangeComplemento(value)}
                    className="App-form-control"
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Label className="App-form-labelC">Gênero</Form.Label>

                <InputGroup className="mb-3">
                  <FormControl
                    aria-label="Text input with dropdown button"
                    value={this.state.sexo}
                  />

                  <DropdownButton
                    variant="outline-light"
                    id="input-group-dropdown-2"
                    align="end"
                    onClick={($event) => {
                      this.onChangeGenero($event.target.accessKey);
                      let sexo = $event.target.accessKey == 1 ? 'Masculino' : $event.target.accessKey == 2 ? 'Feminino' : 'Outros'
                      this.onChangeSexo(sexo)
                    }}
                  >
                    <Dropdown.Item accessKey="1">Masculino</Dropdown.Item>
                    <Dropdown.Item accessKey="2">Feminino</Dropdown.Item>
                    <Dropdown.Item accessKey="3">Outros</Dropdown.Item>
                  </DropdownButton>
                </InputGroup>
              </Col>
              <Col>
                <Form.Group
                  controlId="dataNascimento"
                  className="App-form-groupC"
                >
                  <Form.Label className="App-form-labelC">
                    Data Nascimento
                  </Form.Label>
                  <Form.Control
                    type="date"
                    className="App-form-control"
                    onChange={(value) => this.onChangeDataNascimento(value)}
                    required
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="App-form-groupC" controlId="telefone">
                  <Form.Label className="App-form-labelC">Telefone</Form.Label>
                  <Form.Control
                    type="text"
                    maxLength="11"
                    placeholder="telefone"
                    className="App-form-control"
                    onChange={(value) => this.onChangeTelefone(value)}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
            </Row>

            <Button
              variant="primary"
              type="submit"
              className="App-button-login"
              onClick={async () => {
                var idx = this.state.email.indexOf("@");
                if (
                  this.state.nome != "" &&
                  this.state.dataNascimento != "" &&
                  this.state.email != "" &&
                  idx != -1 &&
                  this.state.senha != "" &&
                  this.state.senhaConfirmada != "" &&
                  this.state.genero != "" &&
                  this.state.estado != "" &&
                  this.state.cidade != "" &&
                  this.state.bairro != "" &&
                  this.state.rua != "" &&
                  this.state.telefone != ""
                ) {
                  if (this.state.senha === this.state.senhaConfirmada) {
                    await this.props.criarUsuario({
                      nome: this.state.nome,
                      email: this.state.email,
                      dataNascimento: this.state.dataNascimento,
                      telefone: this.state.telefone,
                      senha: this.state.senha,
                      estado: this.state.estado,
                      cidade: this.state.cidade,
                      bairro: this.state.bairro,
                      rua: this.state.rua,
                      genero: this.state.genero,
                      linkedin: this.state.linkedin,
                      complemento: this.state.complemento,
                    });
                  }
                } else {
                  swal({
                    title: "Error",
                    text: "Falha no cadastro, confira os campos vazios ou as senhas não coincidem ",
                    icon: "error",
                  });
                }
              }}
            >
              <p className="App-text-button">Criar conta</p>
            </Button>
            <Button
              href="http://localhost:3001/login"
              variant="success"
              className="App-button-login"
            >
              <p className="App-text-button">Já tenho uma conta</p>
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
    criarUsuario: (usuario) => dispatch(criarUsuario(usuario)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cadastro);
