import React, { Component } from "react";
import { connect } from "react-redux";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import swal from "sweetalert";

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
class AtualizarCurriculo extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render(props) {
    return (
      <Container fluid style={{backgroundColor:"white", height: "77.8vh"}}>
          <Col>
            <Row>
              <Col>
              {this.props.curriculo.curriculoLogado.cursosExtra}
              </Col>
              <Col>
              {this.props.curriculo.curriculoLogado.expProfissional}
              </Col>
            </Row>

            <Row>
              <Col>
              {this.props.curriculo.curriculoLogado.habilidades}
              </Col>
              <Col>
              {this.props.curriculo.curriculoLogado.formacao}
              </Col>
            </Row>
            <Row>
              <Col>
              {this.props.curriculo.curriculoLogado.idiomas}
              </Col>
              <Col>
              {this.props.curriculo.curriculoLogado.sobreMim}
              </Col>
              <Col>
              {this.props.curriculo.curriculoLogado.qualPessoais}
              </Col>
            </Row>
          </Col>

          <Row>
            <Col>
            {this.props.curriculo.curriculoLogado.objetivos}
            </Col>

            <Col>
            {this.props.curriculo.curriculoLogado.outros}
            </Col>
          </Row>
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AtualizarCurriculo);
