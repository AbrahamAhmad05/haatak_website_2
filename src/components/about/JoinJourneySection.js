import { albra_grotesk, gilroy_semibold } from '@/lib/font'
import { SearchIcon } from 'lucide-react'
import Image from 'next/image'

function JoinJourneySection() {
  return (
    <div className='text-[#2E0A49] w-full py-16 space-y-16 my-10'>
      <div className='flex flex-col gap-4 justify-center items-center px-2'>
        <h2 className='text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>Want to Join the Journey?</h2>
        <h5 className={`${gilroy_semibold.className} text-center text-3xl md:w-2xl`}>Help us turn saving into a national habit.</h5>
      </div>
      <div>
        {/* <Image src='/about_imgs/who_we_are.png' className='w-full h-full object-contain' width={1920} height={300} alt='Builders' /> */}
        <div className={`${albra_grotesk.className} flex justify-center items-center gap-6 px-2`}>

          <input type="text" placeholder='Find Openings' className='border-[2px] border-[#2E0A49] px-4 py-4 w-2xl rounded-[6px] focus:outline-[2px] focus:outline-[#2E0A49] text-xl' />

          <div className="bg-gradient-to-br from-[#F3C862] via-[#FFE196] to-[#D99A26] p-1 rounded-lg">
            <button className="hidden md:block bg-gradient-to-br from-[#E7CB86] via-[#FFF4DF] to-[#E7CB86] px-4 py-4 rounded-[6px] text-xl font-semibold">
              Discover roles
            </button>
            <button className="md:hidden block bg-gradient-to-br from-[#E7CB86] via-[#FFF4DF] to-[#E7CB86] px-4 py-4 rounded-[6px]">
              <SearchIcon />
            </button>
          </div>

          
        </div>
        <div className={`${gilroy_semibold.className} flex flex-col md:flex-row justify-center items-center py-24  gap-10`}>
            <div className="w-72 h-72 flex flex-col justify-between bg-[#EDB6691A] border-[1px] border-[#000000] px-4 py-4">
              <h6 className="text-xl uppercase text-[#000000]">Designer</h6>
              <h5 className="text-2xl ">Senior Designer</h5>
              <div className='flex gap-6 uppercase text-[#000000]'>
                <p>FULL TIME</p>
                <span>|</span>
                <p>DELHI</p>
              </div>
            </div>
            <div className="w-72 h-72 flex flex-col justify-between bg-[#EDB6691A] border-[1px] border-[#000000] px-4 py-4">
              <h6 className="text-xl uppercase text-[#000000]">Developer</h6>
              <h5 className="text-2xl ">Backend developer</h5>
              <div className='flex gap-6 uppercase text-[#000000]'>
                <p>FULL TIME</p>
                <span>|</span>
                <p>DELHI</p>
              </div>
            </div>
            <div className="w-72 h-72 flex flex-col justify-between bg-[#EDB6691A] border-[1px] border-[#000000] px-4 py-4">
              <h6 className="text-xl uppercase text-[#000000]">Marketing</h6>
              <h5 className="text-2xl ">Senior Designer</h5>
              <div className='flex gap-6 uppercase text-[#000000]'>
                <p>FULL TIME</p>
                <span>|</span>
                <p>DELHI</p>
              </div>
            </div>
            <div className="w-72 h-72 flex flex-col justify-between bg-[#EDB6691A] border-[1px] border-[#000000] px-4 py-4">
              <h6 className="text-xl uppercase text-[#000000]">Media</h6>
              <h5 className="text-2xl ">Social management manager</h5>
              <div className='flex gap-6 uppercase text-[#000000]'>
                <p>FULL TIME</p>
                <span>|</span>
                <p>DELHI</p>
              </div>
            </div>
            
          </div>
      </div>
    </div>
  )
}

export default JoinJourneySection