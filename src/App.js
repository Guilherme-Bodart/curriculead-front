import { Component } from "react";

import { Switch, Route, Redirect } from "react-router-dom";

import Login from "./pages/Login/Login";
import Cadastro from "./pages/Login/Cadastro";
import Recuperar from "./pages/Login/Recuperar";
import MudarSenha from "./pages/Login/MudarSenha";
import Home from "./pages/Main/Home";

import "./styles/App.css";
import MeuCurriculo from "./views/Logado/MeuCurriculo";
class App extends Component {
  render(props) {
    return (
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/cadastro">
          <Cadastro />
        </Route>
        <Route exact path="/recuperar">
          <Recuperar />
        </Route>
        <Route path="/recuperar/:token">
          <MudarSenha />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route>
          <Redirect to="/home">
            <Home />
          </Redirect>
        </Route>
      </Switch>
    );
  }
}

export default App;
