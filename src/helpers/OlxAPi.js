import Cookies from 'js-cookie'
import qs from 'qs'

const BASEAPI = 'http://alunos.b7web.com.br:501/ping'

const apiFechPost = async (endpoint, body ) => {
  if(!body.token) {
    let token = Cookies.get('token')
    if(token) {
      body.token = token
    }
  }
  const res = await fetch(BASEAPI + endpoint, {
    method: 'POST', 
    headers: {
       'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  const json = await res.json()

  if(json.notallowed) {
    window.location.href = '/signin'
    return 
  }
  return json

}

const apiFechGet = async (endpoint, body  = []) => {
  if(!body.token) {
    let token = Cookies.get('token')
    if(token) {
      body.token = token
    }
  }
  const res = await fetch(`${BASEAPI + endpoint}? ${qs.stringify(body)}`)
  const json = await res.json()

  if(json.notallowed) {
    window.location.href = '/signin'
    return 
  }
  return json

}


const OlxAPi = {
  login: async (email, password) => {
    const json = await apiFechPost(
      '/user/signin',
      {email, password}
    )
    return json
  }
}

export default () => OlxAPi