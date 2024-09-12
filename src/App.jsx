import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const usuarioOk = "nadia"
const passwordOk = "holanadia"


function App() {
  const [usuario, setUsuario] = useState("")
  const [password, setPassword] = useState("")
  const [ingreso, setIngreso] = useState("")

  return (
    <>
     <h1>¡Hola, {usuario}!</h1>
     <p>Ingresa tu nombre:</p>
     <input type="text" onChange={(e)=>{
      console.log(e.target.value)
      setUsuario(e.target.value)
     }}/>
     <p>Ingresa tu contraseña:</p>
     <input type="password" onChange={(e)=>{
      console.log(e.target.value)
      setPassword(e.target.value)
     }}/>
     <button onClick={()=>{
      if (usuario == usuarioOk && password == passwordOk){
        console.log("ingreso ok")
        setIngreso("Ok, podes ingresar")
      } else {
        console.warn("no esta ok")
        setIngreso("Chequea devuelta tus datos")
      }
     }}>Ingresar</button>
     <p>{ingreso}</p>
    </>
  )
}

export default App
