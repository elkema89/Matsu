import NavBar from "../../Components/NavBar/NavBar"
import Loading from "../../Components/Loading/Loading"
import SideBar from "../../Components/SideBar/SideBar"
import style from "./Home.module.css"
const Home =()=>{
    return (
        <div className={style.container}>
            <NavBar />
            <div className={style.home}>
            <SideBar />
            <Loading />
            </div>
        </div>
    )
}
export default Home;