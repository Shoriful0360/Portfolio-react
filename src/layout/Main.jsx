import { Outlet } from "react-router-dom";
import App from "../App";


const Main = () => {
    return (
        <div className=" ">
        <App /> 
        <Outlet></Outlet>
        </div>
    );
};

export default Main;