import style from "./NavBar.module.css"
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


const NavBar = () => {

    const location= useLocation();
    console.log(location)

    return (
        <div className={style.container}>
            <h1>MATSU</h1>
            <ul className={style.opciones}>
                <NavLink to="/home" className={style.opcion} >Home</NavLink>
                <NavLink to="/aboutus" className={style.opcion} >Sobre Nosotros</NavLink>
                <NavLink to="/register" className={style.opcion}>Registrarse</NavLink>
                <NavLink to="/login" className={style.opcion}>Iniciar Sesion</NavLink>
            </ul>

        </div>
    )
}
export default NavBar;