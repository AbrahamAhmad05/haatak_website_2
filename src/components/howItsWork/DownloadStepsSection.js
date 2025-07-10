import { gilroy, gilroy_semibold } from "@/lib/font"
import Image from "next/image"


const data = [
  {
    quote: "Getting started is quicker than making a cup of chai.",
    title: "Sign Up & KYC in Seconds",
    image_url: "/how_it_work_imgs/create_account.png",
    description: "Register with your mobile number and complete KYC using PAN & Aadhaar — secure, RBI‑compliant."
  },
  {
    quote: "Start with ₹1.",
    title: "Set & Automate Your Savings",
    image_url: "/how_it_work_imgs/piggy_bank.png",
    description: "Start saving from just ₹10 — daily, weekly, or monthly. Small steps, steady growth."
  },
  {
    quote: "know everything about it",
    title: "Monitor Your Investment",
    image_url: "/how_it_work_imgs/track_gold.png",
    description: "Track live gold prices, view portfolio charts, and stay in control."
  },
  {
    quote: "Sell your gold with a tap.",
    title: "Withdraw Anytime",
    image_url: "/how_it_work_imgs/withdraw.png",
    description: "Withdraw funds instantly or request physical delivery — your gold, your choice."
  },
]
function DownloadStepsSection() {
  return (
    <div className='mt-12 md:mt-32 text-center text-[#2E0A49]'>
      <div className="text-center">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-normal md:leading-snug">
          Just Downloaded? You’re Seconds from Saving Gold.
        </h3>
        <h6 className={`${gilroy.className} text-4xl`}>Now what to do</h6>
      </div>
      <div className="flex flex-col items-center justify-center gap-14 my-14 md:gap-35 md:my-24 px-4 sm:px-6 lg:px-8">
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
            <div className={`relative w-80 h-52`}>
              <Image
                src={e.image_url}
                fill
                alt={e.title}
                className="object-contain"
                // sizes="(max-width: 768px) 192px, 256px"
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