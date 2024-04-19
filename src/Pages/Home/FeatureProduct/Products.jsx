import React from 'react';
import Container from '../../../Shared/Container';

const Products = () => {
    const productData = [
        1,2,3,4
    ]
    return (
        <Container>
        <div className='flex flex-wrap gap-4 xl:flex-nowrap items-center '>

{
    productData.map((item)=>(
        <div key={item} className='bg-white p-4 mx-auto max-w-[370px] shadow-xl rounded-lg '>
            <img  className="h-[370px] w-[350px] rounded-lg object-cover" src="https://source.unsplash.com/200x200/?bed" alt="" />
            <div className='flex flex-col mt-4'>
            <p className='text-gray-500 font-normal'>Women's special</p>
              <h2 className='text-xl font-medium'>Girls dress</h2>

            </div>
        </div>
    ))
}
</div>
                
        </Container>

    );
};

export default Products;