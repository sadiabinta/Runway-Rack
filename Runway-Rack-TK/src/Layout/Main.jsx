import { Outlet } from "react-router-dom";
import Navigation from "../pages/shared/Navigation/Navigation";
import Foot from "../pages/shared/Foot/Foot";
import MuiNavBar from "../pages/shared/MuiNavBar/MuiNavBar";

const Main = () => {
    return (
        <div>
            {/* <Navigation></Navigation> */}
            <MuiNavBar></MuiNavBar>
            <Outlet></Outlet>
            <Foot></Foot>
        </div>
    );
};

export default Main;