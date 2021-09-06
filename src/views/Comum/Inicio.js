import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import {
  FaDollarSign,
  FaGlobe,
  FaEdit,
  FaRegFilePdf,
  FaShareAlt,
  FaStar,
  FaUndo
} from "react-icons/fa";
import { FiLayout, FiSmartphone } from "react-icons/fi";

import { logout } from "../../store/actions/usuarios/usuario";

import logo from "../../assets/logo.png";

const initialState = {};

class Inicio extends Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render(props) {
    return (
      <Container fluid style={{ background: "#282c34", height: "100%" }}>
        <Row
          style={{
            height: "4em",
            color: "white",
            fontSize: "1.3em",
            margin: "0em 2em 5em 2em",
            justifyContent: "center",
            paddingTop: "2em",
          }}
        >
          <h2 style={{ color: "#878ff3", marginBottom: "0.5em" }}>
            Crie seu Currículo!
          </h2>
          <h5 style={{ color: "#d9dbff" }}>
            Currículo grátis e online! Não precisa de nada para ter seu próprio
            site currículo, apenas crie sua conta e faça tudo com alguns
            cliques!
          </h5>
        </Row>
        <Row>
          <Col
            xs={{ spam: 6, offset: 2 }}
            md={{ spam: 3, offset: 0 }}
            style={{ marginLeft: "3em" }}
          >
            <Card bg="light" style={{ width: "25em" }} className="mb-4">
              <Card.Header style={{ color: "#878ff3", fontWeight: "500" }}>
                <h5>Página na Web</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "#282c34" }}>                  
                  <FaGlobe style={{fontSize:"2.2em", marginTop: "-0.2em", color:"#878ff3"}}/>
                </Card.Title>
                <Card.Text style={{ color: "#282c34" }}>
                  Página exclusiva com o nosso domínio, exemplo:
                  www.curriculead.com.br/nome-sobrenome
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={{ spam: 6, offset: 2 }} md={{ spam: 3, offset: 0 }}>
            <Card bg="light" style={{ width: "25em" }} className="mb-4">
              <Card.Header style={{ color: "#878ff3", fontWeight: "500" }}>
                <h5>Currículo Editável</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "#282c34" }}>                  
                  <FaEdit style={{fontSize:"2.2em", marginTop: "-0.2em", color:"#878ff3"}}/>
                </Card.Title>
                <Card.Text style={{ color: "#282c34" }}>
                  Poderá editar os dados facilmente para que todos possam ver
                  suas novas conquistas
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={{ spam: 6, offset: 2 }} md={{ spam: 3, offset: 0 }}>
            <Card bg="light" style={{ width: "25em" }} className="mb-4">
              <Card.Header style={{ color: "#878ff3", fontWeight: "500" }}>
                <h5>Layout Editável</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "#282c34" }}>                  
                  <FiLayout style={{fontSize:"2.2em", marginTop: "-0.2em", color:"#878ff3"}}/>
                </Card.Title>
                <Card.Text style={{ color: "#282c34" }}>
                  Poderá alterar entre os diversos layouts disponíveis para
                  você, gratuitamente!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ spam: 6, offset: 2 }}
            md={{ spam: 3, offset: 0 }}
            style={{ marginLeft: "3em" }}
          >
            <Card bg="light" style={{ width: "25em" }} className="mb-4">
              <Card.Header style={{ color: "#878ff3", fontWeight: "500" }}>
                <h5>Download em PDF</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "#282c34" }}>                  
                  <FaRegFilePdf style={{fontSize:"2.2em", marginTop: "-0.2em", color:"#878ff3"}}/>
                </Card.Title>
                <Card.Text style={{ color: "#282c34" }}>
                  Baixe seu currículo a qualquer momento em PDF para imprimir
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={{ spam: 6, offset: 2 }} md={{ spam: 3, offset: 0 }}>
            <Card bg="light" style={{ width: "25em" }} className="mb-4">
              <Card.Header style={{ color: "#878ff3", fontWeight: "500" }}>
                <h5>Compartilhe com Quem Quiser</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "#282c34" }}>                  
                  <FaShareAlt style={{fontSize:"2.2em", marginTop: "-0.2em", color:"#878ff3"}}/>
                </Card.Title>
                <Card.Text style={{ color: "#282c34" }}>
                  Compartilhe seu currículo nas principais redes sociais, apenas
                  com um link!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={{ spam: 6, offset: 2 }} md={{ spam: 3, offset: 0 }}>
            <Card bg="light" style={{ width: "25em" }} className="mb-4">
              <Card.Header style={{ color: "#878ff3", fontWeight: "500" }}>
                <h5>Tudo Grátis</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "#282c34" }}>                  
                  <FaDollarSign style={{fontSize:"2.2em", marginTop: "-0.2em", color:"#878ff3"}}/>
                </Card.Title>
                <Card.Text style={{ color: "#282c34" }}>
                  Tudo estará disponível gratuitamente para você depois de criar
                  sua própria conta
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col
            xs={{ spam: 6, offset: 2 }}
            md={{ spam: 3, offset: 0 }}
            style={{ marginLeft: "3em" }}
          >
            <Card bg="light" style={{ width: "25em" }} className="mb-4">
              <Card.Header style={{ color: "#878ff3", fontWeight: "500" }}>
                <h5>Sempre Atualizado</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "#282c34" }}>                  
                  <FaUndo style={{fontSize:"2.2em", marginTop: "-0.2em", color:"#878ff3" }}/>
                </Card.Title>
                <Card.Text style={{ color: "#282c34" }}>
                  Com apenas um link seu currículo sempre estará atualizado para
                  todos
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={{ spam: 6, offset: 2 }} md={{ spam: 3, offset: 0 }}>
            <Card bg="light" style={{ width: "25em" }} className="mb-4">
              <Card.Header style={{ color: "#878ff3", fontWeight: "500" }}>
                <h5>Populariedade</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "#282c34" }}>                  
                  <FaStar style={{fontSize:"2.2em", marginTop: "-0.2em", color:"#878ff3"}}/>
                </Card.Title>
                <Card.Text style={{ color: "#282c34" }}>
                  Tenha os dados de quantas pessoas viram seu currículo e quais
                  usuários
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={{ spam: 6, offset: 2 }} md={{ spam: 3, offset: 0 }}>
            <Card bg="light" style={{ width: "25em" }} className="mb-4">
              <Card.Header style={{ color: "#878ff3", fontWeight: "500" }}>
                <h5>Responsividade</h5>
              </Card.Header>
              <Card.Body>
                <Card.Title style={{ color: "#282c34" }}>                  
                  <FiSmartphone style={{fontSize:"2.2em", marginTop: "-0.2em", color:"#878ff3"}}/>
                </Card.Title>
                <Card.Text style={{ color: "#282c34" }}>
                  Seu currículo responsivo com os principais dispositivos de
                  celulares, tablets e computadores
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
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
export default connect(mapStateToProps, mapDispatchToProps)(Inicio);
