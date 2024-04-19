
import { useState } from 'react';

const ProductCard = () => {
  const size = [
   'M','L','Xl'
  ]
  const [selected,setSelected] = useState('M')
    return (
        <div>
            <div className="py-12">

            <div className="mx-auto max-w-[350px] space-y-4 rounded-lg bg-white p-5 shadow-lg md:w-[350px] ">
        {/* <Image width={200} height={200} className="h-[275px] w-[350px] rounded-lg object-cover" src="https://source.unsplash.com/200x200/?bed" alt="card navigate ui" /> */}
        <img  className="h-[270px] w-[350px] rounded-lg object-cover" src="https://source.unsplash.com/200x200/?bed" alt="" />
        <div className="grid ">
          <h1 className="text-lg font-semibold ">Semis for Girls</h1>
           <p className='text-base font-medium mb-3 text-gray-500 '>Women's fashion</p>
           <div className='flex justify-between'>
           <p className="text-lg font-bold pb-1 text-blue-800 ">$99.99</p>
           <p className='text-green-600'>In stock</p>
           </div>

        </div>


                <div className="flex items-center gap-3 " id="size">
                            {size.map((item,key)=>(
                              <div onClick={()=>{setSelected(item)}} className={`border cursor-pointer rounded-lg px-2 ${selected == item && 'border-blue-600'}`} key={key}>
                                  {item}
                              </div>
                            ))}
                </div>

        <div className="flex gap-4">
          <button className="rounded-lg bg-blue-800 px-6 py-2 text-[12px] font-semibold text-white duration-300 hover:bg-slate-950 sm:text-sm md:text-base ">Add to Cart</button> 
         <button className="rounded-md border border-blue-800 px-4  text-blue-800  py-2  duration-300  hover:bg-gray-200">View Details</button>
        </div>
      </div>
            </div>
            
        </div>
    );
};

export default ProductCard;