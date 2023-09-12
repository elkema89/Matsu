import style from "./NavBar.module.css"
import { NavLink } from "react-router-dom";


const NavBar = () => {

    return (
        <div className={style.container}>
            <h1>MATSU</h1>
            <ul className={style.opciones}>
                <NavLink className={style.opcion}>Home</NavLink>
                <NavLink className={style.opcion}>Sobre Nosotros</NavLink>
                <NavLink className={style.opcion}>Registrarse</NavLink>
                <NavLink className={style.opcion}>Iniciar Sesion</NavLink>
            </ul>

        </div>
    )
}
export default NavBar;