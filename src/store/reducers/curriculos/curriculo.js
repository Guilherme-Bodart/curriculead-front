import {
  PREENCHE_CURRICULO_USARIO_LOGADO,
  PREENCHE_CURRICULO,
  LOGOUT_CURRICULO,
} from "../../actions/actionTypes";

const initialState = {
  curriculoLogado: {
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
    id: "",
  },
  curriculoAtual: {
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
    id: "",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PREENCHE_CURRICULO_USARIO_LOGADO:
      let curriculoLogado = action.payload.curriculo;

      return {
        ...state,
        curriculoLogado,
      };
    case PREENCHE_CURRICULO:
      let curriculoAtual = action.payload.curriculo;
      return {
        ...state,
        curriculoAtual,
      };

    case LOGOUT_CURRICULO:
      return initialState;

    default:
      return state;
  }
};

export default reducer;
