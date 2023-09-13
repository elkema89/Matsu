import Loading from "../../Components/Loading/Loading.jsx";
import SideBar from "../../Components/SideBar/SideBar.jsx"
import NavBar from "../../Components/NavBar/NavBar"
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