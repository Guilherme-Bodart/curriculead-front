import { LOGIN_USUARIO, LOGOUT_USUARIO } from '../actionsTypes'

import axios from 'axios'

import { pageLogin } from '../pages/page'


import swal from 'sweetalert';

export const logout = () => {
    return  {
        type: LOGOUT_USUARIO
    }
}

export const autenticarUsuario = usuario => {
    return async (dispatch) => {
        const { email, senha } = usuario
        await axios.post("http://localhost:3001/auth/authenticate", null,  { params: {
            email,
            senha
          }})
            .then(async response => {
                
                usuario = response.data
                
                await dispatch(armazenaInfoUsuario(usuario))
            })
            .catch(error => {
                if( error.response ){
                    var erro_msg = error.response.data.error; // => the response payload 
                }
                swal({
                    title: "Error",
                    text: 'Falha no login, '+erro_msg,
                    icon: "error",
                  });

            })
    }
}


export const armazenaInfoUsuario = usuario => {
    return {
        type: LOGIN_USUARIO,
        payload: usuario,
    }
}

export const criarUsuario = usuario => {

    return async (dispatch) =>  {
        const { nome, email, senha, cpf, telefone, endereco, dataNascimento, permissao } = usuario


        await axios.post("http://localhost:3001/auth/register", null, 
                { params: {
                    nome,
                    email,
                    senha,
                    cpf,
                    telefone,
                    endereco,
                    dataNascimento,
                    permissao
                    }
                }
            )
            .then(response => {
                 swal({
                    title: "Sucesso",
                    text: 'Usuário cadastrado com sucesso',
                    icon: "success",
                  }).then((value) => {
                    //dispatch(pageLogin());
                  });
            })
            .catch( error => {
                if( error.response ){
                    var erro_msg = error.response.data.error; // => the response payload 
                }
                swal({
                    title: "Error",
                    text: 'Falha no cadastro, '+erro_msg,
                    icon: "error",
                  });
            })
    }
}

export const enviarEmailReset = email => {

    return async (dispatch) =>  {

        await axios.post("http://localhost:3001/auth/forgot_password", null, 
                { params: {
                    email
                    }
                }
            )
            .then(response => {
                swal({
                    title: "Sucesso",
                    text: 'O e-mail de recuperação de senha foi enviado com sucesso',
                    icon: "success",
                  })
            })
            .catch( error => {
                if( error.response ){
                    var erro_msg = error.response.data.error; // => the response payload 
                }
                swal({
                    title: "Error",
                    text: 'Falha no envio, '+erro_msg,
                    icon: "error",
                  })
            })
    }
}

export const recuperarSenha = usuario => {

    return async (dispatch) =>  {
        const { senha, token } = usuario


        await axios.post("http://localhost:3001/auth/reset_password", null, 
                { params: {
                    senha,
                    token
                    }
                }
            )
            .then(response => {

                swal({
                    title: "Sucesso",
                    text: 'Sua senha foi alterada com sucesso',
                    icon: "success",
                }).then((value) => {
                    dispatch(pageLogin());
                });          
            })
            .catch( error => {
                if( error.response ){
                    var erro_msg = error.response.data.error; // => the response payload 
                }
                swal({
                    title: "Error",
                    text: 'Falha ao resetar a senha, '+erro_msg,
                    icon: "error",
                  })
            })
    }
}
