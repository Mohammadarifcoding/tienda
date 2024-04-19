
import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Navbar';
import Footer from '../Footer/Footer';
import HomeCard from '../CardData/HomeCard';

const Layout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>
            <HomeCard></HomeCard>
            <Footer></Footer>
        </div>
    );
};

export default Layout;