import { LOGIN_USUARIO, LOGOUT_USUARIO } from "../../actions/actionTypes";

const initialState = {
  email: "",
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
  curriculo: "",
  token: "",
  _id: "",
  logado: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USUARIO:
      let token = action.payload.token;
      let usuario = action.payload.usuario;
      return {
        ...state,
        token,
        email: usuario.email,
        nome: usuario.nome,
        dataNascimento: usuario.dataNascimento,
        telefone: usuario.telefone,
        estado: usuario.estado,
        cidade: usuario.cidade,
        bairro: usuario.bairro,
        rua: usuario.rua,
        complemento: usuario.complemento,
        linkedin: usuario.linkedin,
        genero: usuario.sexo,
        curriculo: usuario.curriculo,
        _id: usuario._id,
        logado: true,
      };

    case LOGOUT_USUARIO:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
