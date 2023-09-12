import style from "./Loading.module.css";
import { useEffect, useRef } from "react";
import { mountScene, cleanUpScene } from "./THREE";


const Loading = ()=>{
    const mountRef = useRef(null)
    useEffect(()=>{
        mountScene(mountRef) 
        //reset
        return ()=>{
            cleanUpScene()
        }

    },[])

    return (
        <div className={style.container}
            ref={mountRef}
        ></div>
    )
}
export default Loading;