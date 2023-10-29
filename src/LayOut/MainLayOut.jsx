import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import ContainerMax from "../Components/ContainerMax/ContainerMax";

const MainLayOut = () => {
    return (
       <div>
<ContainerMax>
<Header/>
<Outlet/>
<Footer/>
</ContainerMax>
</div>
    );
};

export default MainLayOut;