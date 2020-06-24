import Cookies from 'js-cookie'

export const isLogged = () => {
  // vai pegar no cookie o token 
  let token = Cookies.get('token')
  // se tiver o token dar true , se n false.
  return (token) ? true: false
}

export const doLogin = (token, rememberPassword = false) => {
  if(rememberPassword) {
    //expirar depois que o usuario fechar o navegador, 999 dias 
    Cookies.set('token', token, { expires: 999})
  } else {
    //não é pra lembrar , quando fechar o navegador limpa o token
    Cookies.set('token', token)
  }
}

//processo de lagout
export const doLogout = () => {
  Cookies.remove('token')
}