import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
});

const SecondSection = () => {
    return (
        <div className='min-w-full h-[80%] md:h-[180vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-r from-[#FFD8AE00] via-[#FFD8AE] to-[#FFD8AE00] pt-20 md:pt-52 relative'>

            {/* Main curved section */}
            <div className='relative w-[100%] md:w-[105vw] h-[105vw] md:h-[95vw] flex flex-col justify-start  rounded-t-[50%] bg-gradient-to-b from-[#F4A15D] via-[#FFD8AE] to-[#fff] border-dashed border-t-2 border-[#D5760E] md:mt-64'>

                {/* Text content */}
                
                    <div className="text-center pt-16 md:pt-64">
                        <h3 className='text-4xl md:text-6xl font-bold text-[#2E0A49] '>Tap. Done.</h3>
                        <h2 className='text-5xl md:text-8xl font-bold text-[#2E0A49] pt-4 md:pt-6'>Buy Gold in Seconds</h2>
                        <h5 className={`${montserrat.className} text-2xl md:text-4xl text-[#2E0A49] font-medium md:px-80 pt-4 md:pt-6`}>
                            Buy pure 24K gold starting at just ₹1. No paperwork. No delay. No fluff.
                        </h5>
                    </div>

                
                {/* <div className=""> */}
                <div className="w-full h-[40%] object-cover overflow-hidden">
                    <Image
                        src="/home_imgs/bg-second.png"
                        width={2000}
                        height={2000}
                        alt="Digital Gold Coin"
                        className="object-cover  rounded-full "
                    />
                </div>
                {/* </div> */}

                {/* Central gold coin */}
                <div className="absolute w-[100px] md:w-[300] md:-top-36 -top-10  left-1/2 -translate-x-1/2 z-10">
                    <Image
                        src="/home_imgs/logo.webp"
                        width={6300}
                        height={6300}
                        alt="Digital Gold Coin"
                        className="object-contain rounded-full "
                    />
                </div>

                {/* Left card */}
                <div className="absolute w-[100px] md:w-[300px] top-9 md:top-24 left-[23%] -translate-x-1/2 -translate-y-1/2 z-20">
                    <Image
                        src="/home_imgs/card_2.png"
                        width={300}
                        height={300}
                        alt="Card 2"
                        className="object-contain animate-float"
                    />
                </div>

                {/* Right card */}
                <div className="absolute w-[100px] md:w-[300px] top-6 md:top-24 left-[77%] -translate-x-1/2 -translate-y-1/2 z-20">
                    <Image
                        src="/home_imgs/card_1.png"
                        width={300}
                        height={300}
                        alt="Card 1"
                        className="object-contain animate-float"
                    />
                </div>

                <div className="absolute w-[100px] md:w-[300] top-80 -left-[0%] -translate-x-1/2 opacity-75">
                    <Image
                        src="/home_imgs/logo.webp"
                        width={6300}
                        height={6300}
                        alt="Decoration Coin"
                        className="object-contain rounded-full animate-float-delayed"
                    />
                </div>
                <div className="absolute w-[100px] md:w-[300] top-80 right-[0%] translate-x-1/2 opacity-75">
                    <Image
                        src="/home_imgs/logo.webp"
                        width={6300}
                        height={6300}
                        alt="Decoration Coin"
                        className="object-contain rounded-full animate-float-delayed"
                    />
                </div>



                {/* Decorative coins */}

            </div>

        </div>
    );
};

export default SecondSection;