import style from "./Landing.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";


const Landing = ()=>{

    const img = "https://res.cloudinary.com/dt0bfmvvy/image/upload/v1694005326/Matsu/vec5yi4bwvqr3it1nwft.jpg"
    const navigate = useNavigate()
    const handlerClick =()=>{
        navigate("/home")
    }

    return (
        <div className={style.container}>
            <div className={style.opacity}>
            <img src={img} alt="logo" className={style.img} />
            <h1 className={style.h1}>BIENVENIDO</h1>
            <Button name="INGRESAR" action={handlerClick} />
            </div>
        </div>
    )
}
export default Landing;