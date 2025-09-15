import { Outlet } from "react-router-dom";
import App from "../App";


const Main = () => {
    return (
        <div className="max-w-screen-2xl mx-auto">
        <App /> 
        <Outlet></Outlet>
        </div>
    );
};

export default Main;