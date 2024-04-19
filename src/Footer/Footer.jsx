import React from 'react';

const Footer = () => {
    return (
        <div>
            
        <footer className="flex flex-col ">
            <div className="flex flex-col items-start justify-around gap-5 bg-[#393E46] text-white p-10 py-10 md:flex-row md:gap-0 md:items-center">
                <aside className="text-xl items-start justify-center flex gap-5">
                    
                    <p className='text-3xl py-2'>Tienda</p>
                </aside>
                <nav className="text-lg">
                    <ul className="space-y-3">
                        <li>
                            <a className="cursor-pointer hover:underline">Home</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">Contact</a>
                        </li>
                        <li>
                            <a className="cursor-pointer hover:underline">About</a>
                        </li>
                    </ul>
                </nav>
     
            </div>
            <aside className="bg-white py-5 text-center text-sm">
                <p>&copy; 2024 Tienda. All Rights Reserved.</p>
            </aside>
        </footer>
   
        </div>
    );
};

export default Footer;