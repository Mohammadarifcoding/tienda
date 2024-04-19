import React from 'react';

const Products = () => {
    const productData = [
        1,2,3,5,6,4,64
    ]
    return (
        <div className='grid lg:grid-cols-3 gap-10 mt-4 md:grid-cols-2 grid-cols-1 '>
            {
                productData.map((item)=>(
                    <div key={item} className='bg-white p-4 mx-auto max-w-[350px] shadow-xl rounded-lg '>
                        <img  className="h-[370px] w-[350px] rounded-lg object-cover" src="https://source.unsplash.com/200x200/?bed" alt="" />
                        <div className='flex flex-col mt-4'>
                          <h2 className='text-xl font-semibold'>Girls dress</h2>
                          <p></p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Products;