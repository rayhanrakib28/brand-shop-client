import DiscountCard from './DiscountCard';

const Discount = ({discounts}) => {
    return (
        <div className='container mx-auto my-20'>
            <h1 className='text-xl text-[#002B44] md:text-3xl lg:text-4xl font-bold text-center'>Unlock <span className='font-extrabold text-[#0078FF]'>25%</span> Savings!</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center px-5 lg:px-0 mt-6'>
                {
                    discounts?.map(discount => <DiscountCard key={discount.id} discount={discount}></DiscountCard>)
                }
            </div>
        </div>
    );
};

export default Discount;