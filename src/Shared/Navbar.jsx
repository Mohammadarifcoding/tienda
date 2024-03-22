import Container from "./Container";
import { FaShoppingCart } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { MdKeyboardArrowUp } from "react-icons/md";
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'


const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    useEffect(() => {
        const closeDropDown = (e) => {
            if (dropDownMenuRef.current && !dropDownMenuRef.current.contains(e.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);
            return () => document.removeEventListener('mousedown', closeDropDown);
    }, []);

    return (
        <>
            <div className="bg-[#393E46]">
        <Container>
        <nav className="flex  justify-between  px-4 py-2 text-white">
    <div className="scale-100 cursor-pointer flex gap-2   rounded-2xl px-3 py-1 text-xl font-semibold text-white ">
   <span className="cursor-pointer p-2 lg:hidden" onClick={toggleDrawer}> <HiOutlineMenuAlt1 /></span>  <h2>Tienda</h2>
    </div>
    <div className="lg:flex  justify-between  hidden  ">
        <ul className="flex  justify-between gap-10">
            <li className="group flex  cursor-pointer flex-col">
                Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
          
            <li className="group flex  cursor-pointer flex-col">
                All Products <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                Contact  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
        </ul>
        </div>
        <div className="flex  justify-between gap-5 items-center">
          
            <button className="rounded-full hover:bg-sky-600 px-3 py-2 text-white ">
            <FaShoppingCart />
            </button>
            <div className="relative">
                <button
                    ref={dropDownMenuRef}
                    onClick={() => setDropDownState(!dropDownState)}
                    className="relative flex cursor-pointer   gap-1 rounded-full px-3 py-2 text-white hover:bg-sky-600"
                >
                   <FaUserCircle />
                    {/* {dropDownState ? (
                        <span></span> 
                    ) : (
                        // <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"> <path d="m6 9 6 6 6-6" /> </svg>
                    )} */}
                    <MdKeyboardArrowUp className={`text-lg ${dropDownState ? ' ':'rotate-180'} transition-all duration-300`}/>
                </button>
                {dropDownState && (
                    <ul className="absolute top-12 w-[130px] z-10 flex flex-col gap-2 rounded-lg  right-0 bg-[#393E46] ">
                        <li className="cursor-pointer  px-6 py-2  text-white hover:bg-sky-600 rounded-lg flex gap-2  text-nowrap"> <span className="">Sign In</span> <CiLogin /></li>


                    </ul>
                )}
            </div>
        </div>
    
</nav>
        </Container>
       
    </div>

{/* mobile navigation */}
    <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
            >
                    <div className=" flex bg-[#393E46]  py-3 h-screen justify-between flex-col   ">
        <ul className="flex flex-col  justify-between text-white">
            <li className="group flex  cursor-pointer hover:bg-sky-600 px-4 py-3 flex-col">
                Home 
            </li>
          
            <li className="group flex  cursor-pointer hover:bg-sky-600 px-4 py-3 flex-col">
                All Products 
            </li>
            <li className="group flex  cursor-pointer hover:bg-sky-600 px-4 py-3 flex-col">
                Contact  
            </li>
        </ul>
        </div>
            </Drawer>
        </>


   
    );
};

export default Navbar;