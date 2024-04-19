
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Shared/Navbar';

const Layout = () => {
    return (
        <div >
            <Navbar></Navbar>
            <Outlet></Outlet>

            <Footer></Footer>
        </div>
    );
};

export default Layout;