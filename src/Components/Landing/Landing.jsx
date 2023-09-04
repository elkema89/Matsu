import style from "./Landing.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


const Landing = ()=>{

    const navigate = useNavigate()
    const handlerClick =()=>{
        navigate("/home")
    }

    return (
        <div className={style.container}>
                <h1 className={style.h1}>BIENVENIDO</h1>
                <Button name="INGRESAR" action={handlerClick} />
        </div>
    )
}
export default Landing;