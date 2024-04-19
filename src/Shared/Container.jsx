

const Container = ({children}) => {
    return (
        <div className='max-w-[1560px] mx-auto lg:px-7 md:px-5 px-3 py-2'>
            {children}
        </div>
    );
};

export default Container;