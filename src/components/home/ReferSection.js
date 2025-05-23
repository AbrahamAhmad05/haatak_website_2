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
                    <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center gap-16 lg:gap-20 mt-28">
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
        <div className="relative min-h-[160px] xl:min-h-[200px] w-full max-w-4xl text-center flex flex-col items-center justify-end bg-[radial-gradient(circle_at_bottom,#EDB669_0%,_transparent_70%)] border border-[#E39A35]  shadow-2xl">
            {/* Icon Container */}
            <div className="w-28 h-28 xl:w-32 xl:h-32 rounded-full bg-[#F6CE69] flex items-center justify-center absolute -top-12 xl:-top-14">
                <Image 
                    src={icon} 
                    width={110} 
                    height={110} 
                    alt='step icon'
                    className="object-contain p-3"
                />
            </div>

            {/* Content */}
            <div className="pt-28 xl:pt-32 pb-8 px-12  text-center">
                <h6 className={`${gilroy_semibold.className} text-xl lg:text-2xl xl:text-3xl font-semibold text-[#2E0A49]`}>
                    {title}
                </h6>
            </div>
        </div>
    );
};

export default ReferSection;
