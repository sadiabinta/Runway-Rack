import { Outlet } from "react-router-dom";
import Navigation from "../pages/shared/Navigation/Navigation";
import Foot from "../pages/shared/Foot/Foot";

const Main = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;