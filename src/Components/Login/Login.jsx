import style from "./Login.module.css"
import Button from "../Button/Button"
import {useNavigate} from "react-router-dom"
const Login =()=>{
    const navigate = useNavigate()

    const handlerClose= ()=>{
        navigate("/home")
    }

    return(
        <div className={style.contenedor}>
            <Button name="Cerrar" action={handlerClose} />
      <div className={style.container}>
        <form className={style.inputContainer}>
          <h2>Conectarse</h2>
          <label className={style.label}>Email</label>
          <input
            className={style.input}
            placeholder="Email"
            type="email"
            name="email"
          />
          
          <label className={style.label}>Password</label>
          <input
            className={style.input}
            placeholder="Contraseña"
            type="password"
            name="password"            
          />
          <Button name="Conectarse" />
          <p className={style.label}>---------O---------</p>
          <Button name="Conectarse con Google" />
        </form>
      </div>
    </div>
    )
}
export default Login;