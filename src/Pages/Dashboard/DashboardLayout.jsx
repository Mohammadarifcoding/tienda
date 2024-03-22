import { useState } from "react";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SideItem from "./SideItem";

const DashboardLayout = ({children}) => {
    const [openDashboard, setOpenDashboard] = useState(false)
  const toogle = () => setOpenDashboard(!openDashboard)
  const [isDashboardSidebar, setIsDashboardSidebar] = useState(false)
  const toggleDrawer = () => {
    setIsDashboardSidebar((prevState) => !prevState)
  }
  const url = [
    {
      path: '/',
      name: 'Home',
      component: 'HomeComponent',
      underPaths: []
    },
    {
      path: '/about',
      name: 'About',
      component: 'AboutComponent',
      underPaths: []
    },
    {
      path: '/products',
      name: 'Products',
      component: 'ProductsComponent',
      underPaths: [
        {
          path: '/pagol',
          name: 'Pagol',
        },
        {
          path: '/chagol',
          name: 'Chagol',
        }
      ]
    },
    {
      path: '/contact',
      name: 'Contact',
      component: 'ContactComponent',
      underPaths: []
    }
  ]



    return (
         <>
      <div className="flex lg:hidden items-center justify-between border-b border-[#393E46] bg-[#393E46] px-4 py-2">
        <div className=" text-xl font-semibold text-white px-1 py-2 rounded-2xl flex gap-2 justify-start items-center">
          <span onClick={toggleDrawer} className="cursor-pointer p-1 " > <HiOutlineMenuAlt1 /></span> <h2>Dashboard</h2>
        </div>

      </div>

      <div className=' flex gap-5 ' >
        {/* Sidebar */}
        <div className={`hidden lg:block  bg-[#393E46] ${openDashboard ? 'w-[20px] pl-2 pr-2' : 'w-[250px] pl-2 pr-6'}   transition-all duration-1000   py-2 fixed  shadow-xl h-full rounded-r-xl rounded-tr-md`}>
          <div className={` text-white ${openDashboard ? 'opacity-0' : 'opacity-100'} transition-all duration-1000  scale-100 rounded-2xl px-3 py-2 text-xl font-semibold `}>
            <h2>Tienda</h2>
          </div>
          <div className={` mt-10 ${openDashboard ? 'opacity-0' : 'opacity-100'}  transition-all duration-1000  gap-2 flex flex-col`}>
            {url?.map((route, _idx) => (
              <SideItem key={_idx} route={route}></SideItem>
            ))}

          </div>


          {/* Hide button */}

          <div onClick={toogle} className={` ${openDashboard ? 'rotate-180' : ''} absolute bg-sky-100 top-[50%] p-2 border rounded-full  cursor-pointer transition-all duration-400  -right-4 `} >
            <FaArrowLeft />
          </div>
        </div>

        {/* Whole dashboard */}
        <div className={`bg-[#F5F5F5] w-full  ${openDashboard ? ' lg:w-[calc(100%-20px)]' : 'lg:w-[calc(100%-250px)]'} transition-all duration-1000  ml-auto min-h-screen`}>
          {children}
        </div>

      </div>


      {/* Mobile Side bar */}
      <Drawer
        open={isDashboardSidebar}
        onClose={toggleDrawer}
        direction='right'
        className='bla bla bla'
      >
        <div className={` pl-2 pr-6 bg-[#393E46]  py-2   shadow-xl h-full rounded-r-xl rounded-tr-md`}>
          <div className={`  text-white  scale-100 rounded-2xl px-3 py-2 text-xl font-semibold `}>
            <h2>Tienda</h2>
          </div>
          <div className={`mt-4  gap-2 flex flex-col`}>
            {url?.map((route, _idx) => (
              <SideItem key={_idx} route={route}></SideItem>
            ))}

          </div>


          {/* Hide button */}


        </div>
      </Drawer>
    </>

    );
};

export default DashboardLayout;