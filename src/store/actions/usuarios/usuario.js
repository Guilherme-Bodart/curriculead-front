import { LOGIN_USUARIO, LOGOUT_USUARIO } from "../actionTypes";

import axios from "axios";

import swal from "sweetalert";

export const logout = () => {
  return {
    type: LOGOUT_USUARIO,
  };
};

export const autenticarUsuario = (usuario) => {
  return async (dispatch) => {
    const { email, senha } = usuario;
    await axios
      .post("http://localhost:3000/auth/authenticate", {
        email,
        senha,
      })
      .then(async (response) => {
        usuario = response.data;
        await dispatch(armazenaInfoUsuario(usuario));
      })
      .catch((error) => {
        if (error.response) {
          var erro_msg = error.response.data.error; // => the response payload
        }
        swal({
          title: "Error",
          text: "Falha no login, " + erro_msg,
          icon: "error",
        });
      });
  };
};

export const armazenaInfoUsuario = (usuario) => {
  return {
    type: LOGIN_USUARIO,
    payload: usuario,
  };
};

export const criarUsuario = (usuario) => {
  return async (dispatch) => {
    const {
      email,
      senha,
      senhaConfirmada,
      nome,
      dataNascimento,
      telefone,
      estado,
      cidade,
      bairro,
      rua,
      complemento,
      linkedin,
      genero,
    } = usuario;
    await axios
      .post("http://localhost:3000/auth/register", {
        email,
        senha,
        senhaConfirmada,
        nome,
        dataNascimento,
        telefone,
        estado,
        cidade,
        bairro,
        rua,
        complemento,
        linkedin,
        sexo: genero,
      })
      .then((response) => {
        swal({
          title: "Sucesso",
          text: "Usuário cadastrado com sucesso",
          icon: "success",
        });
      })
      .catch((error) => {
        if (error.response) {
          var erro_msg = error.response.data.error; // => the response payload
        }
        swal({
          title: "Error",
          text: "Falha no cadastro, " + erro_msg,
          icon: "error",
        });
      });
  };
};

export const enviarEmailReset = (email) => {
  return async (dispatch) => {
    await axios
      .post("http://localhost:3000/auth/forgot_password", {
        email,
      })
      .then((response) => {
        swal({
          title: "Sucesso",
          text: "O e-mail de recuperação de senha foi enviado com sucesso",
          icon: "success",
        });
      })
      .catch((error) => {
        if (error.response) {
          var erro_msg = error.response.data.error; // => the response payload
        }
        swal({
          title: "Error",
          text: "Falha no envio, " + erro_msg,
          icon: "error",
        });
      });
  };
};

export const recuperarSenha = (usuario) => {
  return async (dispatch) => {
    const { senha, token } = usuario;

    await axios
      .post("http://localhost:3000/auth/reset_password", {
        senha,
        token,
      })
      .then((response) => {
        swal({
          title: "Sucesso",
          text: "Sua senha foi alterada com sucesso",
          icon: "success",
        });
      })
      .catch((error) => {
        if (error.response) {
          var erro_msg = error.response.data.error; // => the response payload
        }
        swal({
          title: "Error",
          text: "Falha ao resetar a senha, " + erro_msg,
          icon: "error",
        });
      });
  };
};
