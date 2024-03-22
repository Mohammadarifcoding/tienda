import Container from "./Container";
import { FaShoppingCart } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";


const Navbar = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

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
    <div className="bg-[#393E46]">
        <Container>
        <nav className="flex items-center justify-between  px-4 py-2 text-white">
    <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <h2>Logo</h2>
    </div>
    <div className="lg:flex items-center justify-between  hidden  ">
        <ul className="flex items-center justify-between gap-10">
            <li className="group flex  cursor-pointer flex-col">
                Home <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                Services <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                About <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
            <li className="group flex  cursor-pointer flex-col">
                Contact  <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
            </li>
        </ul>
        </div>
        <div className="flex items-center justify-between gap-5">
          
            <button className="rounded-full bg-sky-600 px-3 py-2 text-white transition-all duration-300 hover:scale-90">
            <FaShoppingCart />
            </button>
            <div className="relative">
                <button
                    ref={dropDownMenuRef}
                    onClick={() => setDropDownState(!dropDownState)}
                    className="relative flex cursor-pointer  items-center gap-1 rounded-full px-3 py-2 text-white hover:bg-sky-600"
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
                    <ul className="absolute top-12 z-10 flex flex-col gap-2 rounded-lg  right-0 bg-[#393E46] ">
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">Food</li>
                        <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">Transport</li>
                        <li className="cursor-pointer  rounded-b-lg px-6 py-2 text-white hover:bg-sky-600">Management</li>
                    </ul>
                )}
            </div>
        </div>
    
</nav>
        </Container>

    </div>

   
    );
};

export default Navbar;