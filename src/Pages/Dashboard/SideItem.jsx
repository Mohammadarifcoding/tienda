import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";

const SideItem = ({route}) => {
    const [OpenMenu, setOpenMenu] = useState(false)
    const changeOrder = () => setOpenMenu(!OpenMenu)
    return (
        <>

        {/* Dashboard Navbar */}

        
 


            <div className=' text-white  font-medium cursor-pointer group '>
                {route.underPaths.length > 0 ? <div onClick={changeOrder} className="py-2 px-4 hover:bg-sky-100 hover:text-[#1B59F8] flex justify-between items-center rounded-lg">
                    <span>{route.name}</span> {route?.underPaths.length > 0 ? <IoIosArrowDown className='text-xl text-white group-hover:text-black' /> : ''}
                </div> : <Link to={`/Dashboard${route.path}`} onClick={changeOrder} className="py-2 px-4 hover:bg-sky-100 hover:text-[#1B59F8] flex justify-between items-center rounded-lg">
                    <span>{route.name}</span> {route?.underPaths.length > 0 ? <IoIosArrowDown className='text-xl text-white group-hover:text-bla' /> : ''}
                </Link>}


                <div className={` ${OpenMenu ? 'block' : 'hidden'} transition-all duration-300  ${route.underPaths.length > 0 ? ' gap-2 flex flex-col py-3' : 'hidden'} `}>
                    {
                        route.underPaths?.map((sideRoute, _idx) => (
                            <div key={_idx} className=" pl-5  ">
                                <Link to={`/Dashboard${sideRoute.path}`} className='py-1 px-3 rounded-r-md block text-gray-700  hover:bg-sky-100 hover:text-[#1B59F8] border-l border-gray-600  text-white  font-medium  '>
                                    {sideRoute.name}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    );
};

export default SideItem;