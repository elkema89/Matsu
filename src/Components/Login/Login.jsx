import style from "./Login.module.css"
import Button from "../Button/Button"
const Login =()=>{
    return(
        <div className={style.contenedor}>
            <Button name="Cerrar" />
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
          <p className={style.label}>-------------O-------------</p>
          
        </form>
      </div>
    </div>
    )
}
export default Login;