import Image from 'next/image';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
    weight: '400',
    subsets: ['latin']
});

const SecondSection = () => {
    return (
        <div className='min-w-full md:h-[70vh] lg:h-[75vw] 2xl:h-[120vh] flex flex-col justify-center items-center overflow-hidden bg-gradient-to-r from-[#FFD8AE00] via-[#FFD8AE] to-[#FFD8AE00] pt-20 md:pt-32 relative'>

            {/* Main curved section - iPad Pro height optimization */}
            <div className='relative w-[100%] md:w-[105vw] h-[105vw] sm:h-[80vh] md:h-[100vw] 
                            /* iPad Pro specific adjustments */
                            [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-[85vh]
                            [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:h-[75vh]
                            flex flex-col justify-start rounded-t-[50%] bg-gradient-to-b from-[#F4A15D] via-[#FFD8AE] to-[#fff] border-dashed border-t-2 border-[#D5760E] md:mt-20'>

                {/* Text content - iPad Pro padding adjustments */}
                <div className="text-center pt-16 md:pt-32 lg:pt-44 xl:pt-56 
                              /* iPad Pro specific padding - moved text down */
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:pt-32
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:pt-40
                              px-4">
                    <h3 className='text-4xl md:text-4xl lg:text-6xl 
                                  /* iPad Pro text sizing */
                                  [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:text-5xl
                                  [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:text-5xl
                                  font-bold text-[#2E0A49]'>
                        Tap. Done.
                    </h3>
                    <h2 className='text-4xl md:text-5xl lg:text-7xl
                                  /* iPad Pro text sizing */
                                  [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:text-6xl
                                  [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:text-7xl
                                  font-bold text-[#2E0A49] pt-4 md:pt-8'>
                        Buy Gold in Seconds
                    </h2>
                    <h5 className={`${montserrat.className} text-xl md:text-2xl lg:text-3xl 
                                   /* iPad Pro text sizing and padding */
                                   [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:text-2xl
                                   [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:text-3xl
                                   [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:px-16
                                   [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:px-32
                                   text-[#2E0A49] font-medium md:px-20 lg:px-64 pt-4 md:pt-10`}>
                        Buy pure 24K gold starting at just ₹10. No paperwork. Fully insured vault storage.<br/> Complete ownership.
                    </h5>
                </div>

                {/* Background image - positioned to take up 50% of visible area */}
                <div className="absolute bottom-0 w-full h-[50%] md:h-[40%] 
                              /* iPad Pro background height */
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:h-[45%]
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:h-[50%]
                              object-cover overflow-hidden">
                    <Image
                        src="/home_imgs/bg-second.png"
                        width={2000}
                        height={2000}
                        alt="Digital Gold Coin"
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Central gold coin - iPad Pro positioning adjustments */}
                <div className="absolute w-[100px] md:w-[200px] lg:w-[300px] 
                              /* iPad Pro specific positioning */
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:w-[180px]
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:w-[220px]
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:-top-20
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:-top-24
                              md:-top-28 lg:-top-36 -top-10 left-1/2 -translate-x-1/2 z-10">
                    <Image
                        src="/home_imgs/logo.webp"
                        width={6300}
                        height={6300}
                        alt="Digital Gold Coin"
                        className="object-contain rounded-full"
                    />
                </div>

                {/* Left card - iPad Pro positioning adjustments */}
                <div className="absolute w-[100px] md:w-[200px] lg:w-[300px] 
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:w-[150px]
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:w-[180px]
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:top-[72px]
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:top-[72px]
                              top-8 md:top-[36px] lg:top-[72px] left-[23%] -translate-x-1/2 -translate-y-1/2 z-20">
                    <Image
                        src="/home_imgs/card_2.png"
                        width={300}
                        height={300}
                        alt="Card 2"
                        className="object-contain animate-float"
                    />
                </div>

                {/* Right card - iPad Pro positioning adjustments */}
                <div className="absolute w-[100px] md:w-[200px] lg:w-[300px] 
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:w-[150px]
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:w-[180px]
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:top-[72px]
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:top-[72px]
                              top-8 md:top-[36px] lg:top-[72px] left-[77%] -translate-x-1/2 -translate-y-1/2 z-20">
                    <Image
                        src="/home_imgs/card_1.png"
                        width={300}
                        height={300}
                        alt="Card 1"
                        className="object-contain animate-float"
                    />
                </div>

                {/* Decorative coins - iPad Pro positioning adjustments */}
                <div className="absolute w-[100px] md:w-[300px] 
                              /* iPad Pro specific sizing and positioning */
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:w-[200px]
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:w-[250px]
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:top-60
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:top-72
                              top-38 md:top-80 -left-[0%] -translate-x-1/2 opacity-75">
                    <Image
                        src="/home_imgs/logo.webp"
                        width={6300}
                        height={6300}
                        alt="Decoration Coin"
                        className="object-contain rounded-full animate-float-delayed"
                    />
                </div>
                <div className="absolute w-[100px] md:w-[300px] 
                              /* iPad Pro specific sizing and positioning */
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:w-[200px]
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:w-[250px]
                              [@media(min-width:768px)_and_(max-width:1024px)_and_(min-height:1000px)]:top-60
                              [@media(min-width:1024px)_and_(max-width:1366px)_and_(min-height:1300px)]:top-72
                              top-38 md:top-80 right-[0%] translate-x-1/2 opacity-75">
                    <Image
                        src="/home_imgs/logo.webp"
                        width={6300}
                        height={6300}
                        alt="Decoration Coin"
                        className="object-contain rounded-full animate-float-delayed"
                    />
                </div>
            </div>
        </div>
    );
};

export default SecondSection;