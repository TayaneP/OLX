import  React, { useState}  from  'react'
import { PageArea } from './styled'
import useAPi from '../../helpers/OlxAPi'
import { PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents'
import { doLogin } from '../../helpers/AuthHandler'

const Page = () => {
  const api = useAPi()

  const [email, setEmail ] = useState('')
  const [password, setPassword] = useState('')
  const [rememberPassword, setRememberPassword] = useState(false)
  const [disabled, setDisabled] = useState(false)
  const [error, setError ] = useState('')

 const handleSumit = async (e) => {
   // prevenir que o formulario seja enviado.
  e.preventDefault()
  //quando clicar pra enviar desabilita os campos
  setDisabled(true)
  //criar um objeto expecifico para as requisições para qualquer back
  
  //consulta de login
  const json = await api.login(email, password)
  //se tiver algum erro, seta o tipo de erro
  if (json.error ) {
    setError(json.error)
  } else {
    //se n tiver nenhum erro, vai executar a função de login
    //no AuthHandler
    doLogin(json.token, rememberPassword)
    window.location.href= '/'
  }
  setDisabled(false)

 }
  return (
    <PageContainer>
     <PageTitle>Login</PageTitle>
     <PageArea>
     {error && 
      <ErrorMessage>{error}</ErrorMessage>
    
     }
       <form onSubmit={handleSumit}>
         <label className="area">
           <div className="area-title">E-mail</div>
           <div className="area-input">
            <input 
            type="email"
             disabled={disabled}
             value={email}
             onChange={e=> setEmail(e.target.value)}  required />
             </div>
         </label>

         <label className="area">
           <div className="area-title">Senha</div>
           <div className="area-input">
            <input type="password"
             disabled={disabled}
             value={password}
             onChange={e=> setPassword(e.target.value)}  required />
           </div>
         </label>

         <label className="area">
           <div className="area-title">Lembrar Senha</div>
           <div className="area-input">
            <input type="checkbox" 
            disabled={disabled}
            checked={rememberPassword} 
             onChange={()=> setRememberPassword(!rememberPassword)}/>
           </div>
         </label>

         <label className="area">
           <div className="area-title"></div>
           <div className="area-input">
            <button disabled={disabled}>Fazer Login</button>
           </div>
         </label>
       </form>
    </PageArea>
    </PageContainer>
  )
}
export default Page