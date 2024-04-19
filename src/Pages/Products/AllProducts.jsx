import React from 'react';
import Container from '../../Shared/Container';
import ProductCard from './ProductCard';

const AllProducts = () => {
    const data = [
        1,2,23,2,53
    ]
    return (
        <Container>
        <div className=''> 
            <h2 className='text-2xl text-center font-semibold mt-10'>All Products </h2>
            <p className='text-center text-gray-500'>Explore the wide range of products</p>
            <div className='grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-2 justify-start items-center mt-10'>
                 {data.map((item)=>(
                    <ProductCard item={item} key={item}></ProductCard>
                 ))}
            </div>
        </div>
        </Container>

    );
};

export default AllProducts;