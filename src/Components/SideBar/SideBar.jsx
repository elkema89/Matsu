import style from "./SideBar.module.css"
import { NavLink } from "react-router-dom"

const SideBar = ()=>{
    return (
        <div className={style.container}>
            <NavLink className={style.opciones}>Combos</NavLink>
            <NavLink className={style.opciones}>Rolls Clasicos</NavLink>
            <NavLink className={style.opciones}>Rolls Especiales</NavLink>
            <NavLink className={style.opciones}>Nigiris</NavLink>
            <NavLink className={style.opciones}>Geishas</NavLink>
            <NavLink className={style.opciones}>Entradas</NavLink>
            <NavLink className={style.opciones}>Salteados al Wok</NavLink>
            <NavLink className={style.opciones}>Especialidades</NavLink>
            <NavLink className={style.opciones}>Postres</NavLink>
        </div>
    )
}
export default SideBar;