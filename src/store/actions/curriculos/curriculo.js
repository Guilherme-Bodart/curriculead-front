import {
  PREENCHE_CURRICULO_USARIO_LOGADO,
  PREENCHE_CURRICULO,
  LOGOUT_CURRICULO,
} from "../actionTypes";

import axios from "axios";

import swal from "sweetalert";

export const logout = () => {
  return {
    type: LOGOUT_CURRICULO,
  };
};

export const getCurriculoUsuario = (id_usuario) => {
  return async (dispatch) => {
    await axios
      .get("http://localhost:3000/curriculo/" + id_usuario)
      .then(async (response) => {
        let curriculo = response.data;
        await dispatch(armazenaInfoCurriculo(curriculo));
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

export const armazenaInfoCurriculoLogado = (curriculo) => {
  return {
    type: PREENCHE_CURRICULO_USARIO_LOGADO,
    payload: curriculo
  };
};

export const armazenaInfoCurriculo = (curriculo) => {
  return {
    type: PREENCHE_CURRICULO,
    payload: curriculo,
  };
};

export const criarCurriculo = (curriculo) => {
  return async (dispatch, getState) => {
    const token = "Bearer " + getState().usuario.token;
    const {
      cursosExtra,
      expProfissional,
      estilo,
      formacao,
      habilidades,
      idiomas,
      sobreMim,
      qualPessoais,
      objetvios,
      outros,
    } = curriculo;
    await axios
      .post(
        "http://localhost:3000/curriculo",
        {
          cursosExtra,
          expProfissional,
          estilo,
          formacao,
          habilidades,
          idiomas,
          sobreMim,
          qualPessoais,
          objetvios,
          outros,
        },
        { headers: { Authorization: token } }
      )
      .then(async (response) => {
        await dispatch(armazenaInfoCurriculoLogado(response.data));
        swal({
          title: "Sucesso",
          text: "Curriculo criado com sucesso",
          icon: "success",
        });
      })
      .catch((error) => {
        if (error.response) {
          var erro_msg = error.response.data.error; // => the response payload
        }
        swal({
          title: "Error",
          text: "Falha na criação, " + erro_msg,
          icon: "error",
        });
      });
  };
};

export const atualizarCurriculo = (curriculo) => {
  return async (dispatch, getState) => {
    const token = "Bearer " + getState().usuario.token;
    const {
      cursosExtra,
      expProfissional,
      estilo,
      formacao,
      habilidades,
      idiomas,
      sobreMim,
      qualPessoais,
      objetvios,
      outros,
    } = curriculo;
    console.log("ATUALIZANDO2 http://localhost:3000/curriculo/",getState().curriculo.curriculoLogado._id)
    await axios
      .put(
        "http://localhost:3000/curriculo/"+getState().curriculo.curriculoLogado._id,
        {
          cursosExtra,
          expProfissional,
          estilo,
          formacao,
          habilidades,
          idiomas,
          sobreMim,
          qualPessoais,
          objetvios,
          outros,
        },
        { headers: { Authorization: token } }
      )
      .then(async (response) => {
        await dispatch(armazenaInfoCurriculoLogado(response.data));
        swal({
          title: "Sucesso",
          text: "Curriculo criado com sucesso",
          icon: "success",
        });
      })
      .catch((error) => {
        if (error.response) {
          var erro_msg = error.response.data.error; // => the response payload
        }
        swal({
          title: "Error",
          text: "Falha na atualização, " + erro_msg,
          icon: "error",
        });
      });
  };
};
