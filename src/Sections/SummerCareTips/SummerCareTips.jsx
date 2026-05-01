import Marquee from 'react-fast-marquee';

const SummerCareTips = () => {
    return (
        <div className='mt-10 sm:mt-20 my-5 py-1 mx-2 border border-0.5 border-blue-300/80'>
            <Marquee
                pauseOnHover='true'
                autoFill='true'
            >
                <h1 className="text-[12px] sm:text-2xl font-bold text-center">
                    Stay hydrated 🥤
                    <span className='opacity-0'>...........</span>
                    Use sunscreen daily ☀️
                    <span className='opacity-0'>...........</span>
                    Wear light, breathable clothes 👕
                    <span className='opacity-0'>...........</span>
                    Don’t forget sunglasses 🕶️
                    <span className='opacity-0'>...........</span>
                    Seek shade when possible 🌴
                    <span className='opacity-0'>...........</span>
                    Keep your skin fresh & clean 🧴
                    <span className='opacity-0'>...........</span>
                </h1>
            </Marquee>
        </div>
    );
};

export default SummerCareTips;