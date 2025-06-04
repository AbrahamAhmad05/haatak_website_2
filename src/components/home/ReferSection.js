import { gilroy, gilroy_semibold } from '@/lib/font';
import Image from 'next/image';

const ReferSection = () => {
    return (
        <div className="w-full py-24 px-4 md:px-8 lg:px-24 xl:px-32">
            <div className="max-w-screen-xl mx-auto flex flex-col items-center gap-16 xl:gap-24">
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center">
                    <h2 className={`${gilroy.className} text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#2E0A49]`}>
                        Share The App. Earn Real Gold. Simple.
                    </h2>

                    <h3 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#2E0A49] leading-tight">
                        Refer. Earn. Repeat.
                    </h3>

                    <p className={`${gilroy_semibold.className} text-lg md:text-xl lg:text-2xl xl:text-3xl text-[#2E0A49] max-w-3xl mx-auto`}>
                        Invite Friends To Start Saving With Haatak And Both Of You Get
                        Rewarded In 24K Gold – Because Good Decisions Should Be Contagious.
                    </p>

                    {/* Steps */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 px-6 gap-20 md:gap-12 lg:gap-20 mt-20 md:mt-32 place-items-center">
                        <ReferCard icon='/home_imgs/link_icon.png' title='Share Your Referral Link' />
                        <ReferCard icon='/home_imgs/friends_icon.png' title='Friend Joins & Starts Saving' />
                        <ReferCard icon='/home_imgs/bonus_icon.png' title='You Both Earn Bonus Gold' />
                    </div>
                </div>
            </div>
        </div>
    );
};

const ReferCard = ({ icon, title }) => {
    return (
        <div className="relative w-full max-w-sm h-36 md:h-40 lg:h-48 text-center flex flex-col items-center justify-end bg-[radial-gradient(circle_at_bottom,#EDB669_0%,_transparent_70%)] border-[2px] border-[#E39A35] shadow-2xl ">
            {/* Icon Container */}
            <div className="w-24 h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 rounded-full bg-[#F6CE69] flex items-center justify-center absolute -top-12 xl:-top-16 left-1/2 transform -translate-x-1/2">
                <Image 
                    src={icon} 
                    width={80} 
                    height={80} 
                    alt='step icon'
                    className="object-contain p-2 lg:p-3"
                />
            </div>

            {/* Content */}
            <div className="pt-16 xl:pt-20 pb-6 px-4 md:px-4  text-center flex-1 flex items-end justify-center">
                <h6 className={`${gilroy_semibold.className} text-lg lg:text-xl xl:text-2xl font-semibold text-[#2E0A49] leading-tight`}>
                    {title}
                </h6>
            </div>
        </div>
    );
};

export default ReferSection;