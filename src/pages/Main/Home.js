import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../../store/actions/usuarios/usuario";

import NavbarP from "../../components/Navbar/NavbarP";
import FooterP from "../../components/Footer/FooterP";
import Inicio from "../../views/Comum/Inicio";
import CriarCurriculo from "../../views/Logado/CriarCurriculo";
import AtualizarCurriculo from "../../views/Logado/AtualizarCurriculo";
import MeuCurriculo from "../../views/Logado/MeuCurriculo";
import "../../styles/App.css";
class Home extends Component {
  constructor(props) {
    super(props);
  }

  render(props) {
    return (
      <div className="App">
        <NavbarP/>
        <MeuCurriculo />
        <FooterP/>
      </div>
    );
  }
}

const mapStateToProps = ({ usuario, curriculo }) => {
  return {
    usuario,
    curriculo
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
