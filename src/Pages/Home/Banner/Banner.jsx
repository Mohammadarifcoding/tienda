import React from 'react';
import Container from '../../../Shared/Container';

const Banner = () => {
    return (
        <div className='bg-[#393E46] text-white  '>
            <Container>
                <div className='flex flex-col gap-8 md:flex-row  justify-center items-center'>
                    <div>
                        <img className='lg:max-w-[390px] md:max-w-[330px] max-w-[200px]' src="/fashionInfluencier.png" alt="" />
                    </div>
                    <div className='flex flex-col'>
                      <h2 className='font-medium text-gray-200 text-lg pb-14'>Trendy Collection's</h2>
                      <h1 className='text-gray-100 text-5xl max-w-[500px] font-semibold leading-[60px]'>HIGHEST QUALITY COLLECTION</h1>
                      <p className='max-w-[430px] font-medium text-gray-400 mt-2'>Unleash your style potential with our curated fashion picks, where trend meets individuality for the modern fashionista.</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;