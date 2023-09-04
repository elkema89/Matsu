import style from "./Button.module.css"

const Button =({name, action})=>{
    return (
        <div>
            <button className={style.button} onClick={action}>{name}</button>
        </div>
        
    )
}
export default Button;