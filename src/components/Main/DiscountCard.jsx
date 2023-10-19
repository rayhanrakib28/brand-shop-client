
const DiscountCard = ({ discount }) => {
    const { id, name, image, type } = discount || {};

    return (
        <div key={id} data-aos="fade-up" data-aos-duration="2000" className='my-6'>
            <div className='relative  hover:scale-110 overflow-hidden transform transition-transform duration-1000'>
                <img className='w-80 lg:w-[400px] rounded-md' src={image} alt="" />
                <div className='p-4 flex flex-col items-center text-center justify-between gap-2 w-full h-full lg:w-[400px] absolute bottom-0 left-0'>
                    <div>
                        <h2 className='text-sm lg:text-lg font-medium text-[#F9FAFB] mt-6 md:mt-2 lg:mt-8 hover:text-[#0078FF]'>{type}</h2>
                        <h3 className='text-white text-xl lg:text-4xl font-semibold py-2'>{name}</h3>
                    </div>
                        <button className='underline text-white font-bold text-sm lg:text-lg'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default DiscountCard;