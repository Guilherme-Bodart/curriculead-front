import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import swal from "sweetalert";

import { criarCurriculo, armazenaInfoCurriculo } from "../../store/actions/curriculos/curriculo";

const initialState = {
  cursosExtra: "",
  expProfissional: "",
  estilo: "",
  formacao: "",
  habilidades: "",
  idiomas: "",
  sobreMim: "",
  qualPessoais: "",
  objetivos: "",
  outros: "",
};
class CriarCurriculo extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  onChangeCursosExtra = (event) => {
    this.setState({
      cursosExtra: event.target.value,
    });
  };

  onChangeExpProfissional = (event) => {
    this.setState({
      expProfissional: event.target.value,
    });
  };

  onChangeEstilo = (event) => {
    this.setState({
      estilo: event.target.value,
    });
  };

  onChangeFormacao = (event) => {
    this.setState({
      formacao: event.target.value,
    });
  };

  onChangeHabilidades = (event) => {
    this.setState({
      habilidades: event.target.value,
    });
  };

  onChangeIdiomas = (event) => {
    this.setState({
      idiomas: event.target.value,
    });
  };

  onChangeSobreMim = (event) => {
    this.setState({
      sobreMim: event.target.value,
    });
  };

  onChangeQualPessoais = (event) => {
    this.setState({
      qualPessoais: event.target.value,
    });
  };

  onChangeObjetivos = (event) => {
    this.setState({
      objetivos: event.target.value,
    });
  };

  onChangeOutros = (event) => {
    this.setState({
      outros: event.target.value,
    });
  };

  handleSubmit(event) {
    event.preventDefault();
  }

  render(props) {
    return (
      <Container fluid style={{backgroundColor:"white", height: "77.8vh"}}>
        <Form onSubmit={this.handleSubmit}>
          <Col>
            <Row>
              <Col>
                <Form.Group controlId="expProfissional">
                  <Form.Label className="App-form-labelC">Experiência Profissional</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Experiência Profissional"
                    className="App-form-control"
                    onChange={(value) => this.onChangeExpProfissional(value)}
                    required
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formacao"
                  className="App-form-groupC"
                >
                  <Form.Label className="App-form-labelC">
                    Formação
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Formação"
                    className="App-form-control"
                    onChange={(value) => this.onChangeFormacao(value)}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="cursosExtra">
                  <Form.Label className="App-form-labelC">
                    Cursos Extracurriculares
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Cursos Extracurriculares"
                    className="App-form-control"
                    onChange={(value) => this.onChangeCursosExtra(value)}
                    required
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="sobreMim">
                  <Form.Label className="App-form-labelC">Sobre Mim</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Sobre Mim"
                    className="App-form-control"
                    onChange={(value) => this.onChangeSobreMim(value)}
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="qualPessoais">
                  <Form.Label className="App-form-labelC">Qualificações Pessoais</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Qualificações Pessoais"
                    className="App-form-control"
                    onChange={(value) => this.onChangeQualPessoais(value)}
                    required
                  />
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="App-form-groupC" controlId="objetivos" e>
                  <Form.Label className="App-form-labelC">Objetivos</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Objetivos"
                    className="App-form-control"
                    onChange={(value) => this.onChangeObjetivos(value)}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="App-form-groupC" controlId="outros">
                  <Form.Label className="App-form-labelC">Outros</Form.Label>
                  <Form.Control
                    type="text"
                    className="App-form-control"
                    placeholder="Outros"
                    onChange={(value) => this.onChangeOutros(value)}
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
                controlId="idiomas"
                className="App-form-groupC"
              >
                <Form.Label className="App-form-labelC">
                  Idiomas
                </Form.Label>
                <Form.Control
                  type="text"
                  className="App-form-control"
                  placeholder="Idiomas"
                  onChange={(value) => this.onChangeIdiomas(value)}
                  required
                />
                <Form.Text className="text-muted"></Form.Text>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group
                controlId="habilidades"
                className="App-form-groupC"
              >
                <Form.Label className="App-form-labelC">
                  Habilidades
                </Form.Label>
                <Form.Control
                  type="text"
                  className="App-form-control"
                  placeholder="Habilidades"
                  onChange={(value) => this.onChangeHabilidades(value)}
                  required
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
              if (
                this.state.cursosExtra != "" &&
                this.state.expProfissional != "" &&
                this.state.formacao != "" &&
                this.state.habilidades != "" &&
                this.state.idiomas != "" &&
                this.state.sobreMim != "" &&
                this.state.qualPessoais != "" &&
                this.state.objetivos != "" &&
                this.state.outros != ""
              ) {
                  console.log(this.props)
                await this.props.criarCurriculo({
                  cursosExtra: this.state.cursosExtra,
                  expProfissional: this.state.expProfissional,
                  estilo: this.state.estilo,
                  formacao: this.state.formacao,
                  habilidades: this.state.habilidades,
                  idiomas: this.state.idiomas,
                  sobreMim: this.state.sobreMim,
                  qualPessoais: this.state.qualPessoais,
                  objetivos: this.state.objetivos,
                  outros: this.state.outros,
                });
              } else {
                swal({
                  title: "Error",
                  text: "Falha em criar o currículo, confira os campos vazios ",
                  icon: "error",
                });
              }
            }}
          >
            <p className="App-text-button">Criar currículo</p>
          </Button>
        </Form>
      </Container>
    );
  }
}
const mapStateToProps = ({ usuario, curriculo }) => {
  return {
    usuario,
    curriculo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    criarCurriculo: (curriculo) => dispatch(criarCurriculo(curriculo)),
    armazenaInfoCurriculo: (curriculo) => dispatch(armazenaInfoCurriculo(curriculo)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CriarCurriculo);
