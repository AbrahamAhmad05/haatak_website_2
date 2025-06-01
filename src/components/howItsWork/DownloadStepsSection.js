import { gilroy, gilroy_semibold } from "@/lib/font"
import Image from "next/image"


const data = [
  {
    quote: "Takes less time than brewing chai.",
    title: "Create Your Account",
    image_url: "/how_it_work_imgs/create_account.png",
    description: "Sign up with your mobile number and complete KYC using your PAN & Aadhaar — secure, quick, and RBI-compliant."
  },
  {
    quote: "Start with ₹1.",
    title: "Start Saving Gold",
    image_url: "/how_it_work_imgs/piggy_bank.png",
    description: "Set daily, weekly, or monthly savings — no pressure. More you save, more your gold grows."
  },
  {
    quote: "know everything about it",
    title: "Track Your Gold",
    image_url: "/how_it_work_imgs/track_gold.png",
    description: "Live price updates. Beautiful charts. Total control, without the complexity."
  },
  {
    quote: "Sell your gold with a tap.",
    title: "Withdraw Anytime",
    image_url: "/how_it_work_imgs/withdraw.png",
    description: "Money hits your account(cash) or delivered at your home in form of physical gold (Coin or jewellery). No drama. No delays."
  },
]
function DownloadStepsSection() {
  return (
    <div className='mt-12 md:mt-40 text-center text-[#2E0A49]'>
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal md:leading-snug">
          So you downloaded our app
        </h3>
        <h6 className={`${gilroy.className} text-4xl`}>Now what to do</h6>
      </div>
      <div className="flex flex-col items-center justify-center gap-14 my-14 md:gap-64 md:my-64 px-4 sm:px-6 lg:px-8">
        {data.map((e, i) => (
          <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl gap-2" key={i}>
            {/* Quote */}
            <h5 className={`${gilroy.className} text-2xl md:text-4xl leading-relaxed max-w-3xl`}>
              {e.quote}
            </h5>

            {/* Gradient Badge */}
            <div className="w-full max-w-md bg-gradient-to-br from-[#F3C862] via-[#FFE196] to-[#D99A26] p-1 rounded-lg">
              <div className="bg-gradient-to-br from-[#E7CB86] via-[#FFF4DF] to-[#E7CB86] px-6 py-3 md:px-8 md:py-4 rounded-[6px] text-3xl md:text-4xl font-semibold">
                {e.title}
              </div>
            </div>

            {/* Image */}
            <div className={`relative ${i >= 2 ? 'w-64 h-64 md:w-80 md:h-80' : 'w-48 h-48 md:w-72 md:h-72'}`}>
              <Image
                src={e.image_url}
                fill
                alt={e.title}
                className="object-contain"
                sizes="(max-width: 768px) 192px, 256px"
              />
            </div>

            {/* Description */}
            <h6 className={`${gilroy_semibold.className} text-xl md:text-3xl max-w-2xl mx-auto`}>
              {e.description}
            </h6>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DownloadStepsSection