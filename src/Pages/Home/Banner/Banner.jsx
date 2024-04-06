
import Container from '../../../Shared/Container';

const Banner = () => {
    return (
<div className='relative w-full min-h-[550px]'>
    <div className='absolute inset-0 bg-[url(/banner.jpg)] bg-cover bg-fixed bg-center'></div>
    <div className='absolute inset-0 bg-black opacity-[0.7]'></div> {/* Overlay */}
    <Container>
        <div className='flex flex-col gap-8 md:flex-row justify-center items-center relative z-10'>
            <div>
                <img className='lg:max-w-[390px] md:max-w-[330px] max-w-[200px]' src="/fashionInfluencier.png" alt="" />
            </div>
            <div className='flex flex-col'>
                <h2 className='font-medium text-gray-200 lg:text-lg md:pb-14 sm:pb-10 pb-8 md:text-base text-sm'>Trendy Collection's</h2>
                <h1 className='text-gray-100 lg:text-5xl md:text-4xl text-3xl max-w-[500px] font-semibold lg:leading-[60px] md:leading-[45px] leading-[40px]'>HIGHEST QUALITY COLLECTION</h1>
                <p className='max-w-[430px] font-medium text-gray-400 mt-2 lg:text-base text-sm'>Unleash your style potential with our curated fashion picks, where trend meets individuality for the modern fashionista.</p>
            </div>
        </div>
    </Container>
</div>

    );
};

export default Banner;