
import { PiShoppingCartFill } from "react-icons/pi";
import { CgAdd } from "react-icons/cg";

const Carsoulcard = () => {
    return (
        <div>
            <div className="md:mr-20 mr-8  ">

<div className="mx-auto max-w-[250px]  p-6 rounded-lg bg-white  shadow-lg md:w-[320px] dark:bg-[#18181B]">
<img  className="md:h-[200px] h-[130px] w-[300px] md:w-[350px] rounded-lg object-cover" src="https://i.ibb.co/L0t5wB1/ba1724c2-c606-481c-a0ca-63424b61a8661668078028270-Womens-Rayon-Printed-Embroidered-Kurta-With-Pant-A.jpg" alt="" />
<div className="grid ">
<h1 className="text-lg font-semibold ">Product Name</h1>
<div className="text-sm  my-2">$99.99</div>
</div>



<div className="flex md:gap-12 gap-4">
<button className="rounded-lg bg-blue-700 px-6 py-2 text-sm font-semibold text-white duration-300 hover:bg-slate-950  md:text-sm flex md:flex-row flex-col items-center justify-center gap-2 "> <PiShoppingCartFill />Add Cart</button> 
<button className="rounded-md border border-blue-700 px-4 dark:border-white dark:hover:text-slate-800 dark:hover:bg-white  py-2  md:flex-row flex-col duration-300 hover:bg-gray-200 flex text-sm items-center justify-center gap-2"><CgAdd /> Buy</button>
</div>
</div>
</div>
        </div>
    );
};

export default Carsoulcard;

