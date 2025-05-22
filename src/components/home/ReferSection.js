import { gilroy, gilroy_semibold } from '@/lib/font';
import Image from 'next/image';
import { Button } from '../ui/button';

const ReferSection = () => {
    return (
        <div className="w-full py-24 px-4 md:px-8">
            <div className="max-w-6xl mx-auto flex flex-col items-center gap-12">
                {/* Text Content */}
                <div className="flex-1 space-y-6 text-center">
                    <h2 className={`${gilroy.className} text-xl md:text-2xl font-bold text-[#2E0A49]`}>
                        Share The App. Earn Real Gold. Simple.
                    </h2>

                    <h3 className="text-4xl md:text-6xl font-bold text-[#2E0A49] leading-tight">
                        Refer. Earn. Repeat.
                    </h3>

                    <p className={`${gilroy_semibold.className} text-lg md:text-xl text-[#2E0A49] max-w-2xl mx-auto`}>
                        Invite Friends To Start Saving With Haatak And Both Of You Get
                        Rewarded In 24K Gold – Because Good Decisions Should Be Contagious.
                    </p>

                    {/* Steps */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-24">
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
        <div className="relative min-h-[180px] w-full max-w-[360px] mx-auto text-center flex flex-col items-center justify-end bg-radial-gradient(from-20% at 25% 60%, #ffffff, #EDB669) border border-[#E39A35] rounded-xl element">
            {/* Icon Container */}
            <div className="w-24 h-24 rounded-full bg-[#F6CE69] flex items-center justify-center absolute -top-12">
                <Image 
                    src={icon} 
                    width={56} 
                    height={56} 
                    alt='step icon'
                    className="object-contain p-3"
                />
            </div>
            
            {/* Content */}
            <div className="pt-24 pb-8 px-4">
                <h6 className={`${gilroy_semibold.className} text-xl font-semibold text-[#2E0A49]`}>
                    {title}
                </h6>
            </div>
        </div>
    );
};

export default ReferSection;