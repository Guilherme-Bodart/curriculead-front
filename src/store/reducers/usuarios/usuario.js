import { LOGIN_USUARIO, LOGOUT_USUARIO } from '../../actions/actionsTypes'

const initialState = {
    email: '',
    nome: '',
    token: '',
    _id: '',
    permissao: '',
    logado: false,
}

const reducer = (state = initialState, action) => {

switch (action.type) {

   case LOGIN_USUARIO:
        let { email, _id, permissao } = action.payload.usuario;
        let token = action.payload.token
        let logado = true
        return {
            ...state, email, nome: action.payload.usuario.pessoa.nome, token, _id, permissao, logado
        }

   case LOGOUT_USUARIO:
       return initialState

   default:
       return state
}
}

export default reducer