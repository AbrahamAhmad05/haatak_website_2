'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import { albra_grotesk, gilroy_semibold } from '@/lib/font';
import { ArrowRight, SearchIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Skeleton } from '../ui/skeleton';
import axios from 'axios';
import { API_BASE_URL } from '@/config';
import { useRouter } from 'next/navigation';

function JoinJourneySection() {
  const router = useRouter();
  const [jobsData, setJobsData] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_BASE_URL}/jobs`);
      setJobsData(response.data);
      setFilteredJobs(response.data);
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filtered = jobsData.filter(job =>
      job.title.toLowerCase().includes(value.toLowerCase()) ||
      job.role.toLowerCase().includes(value.toLowerCase()) ||
      job.location.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  const handleApplyClick = (jobId) => {
    router.push(`/jobs/apply/${jobId}`);
  };

  return (
    <div className='text-[#2E0A49] w-full py-12 space-y-12'>
      <div className='flex flex-col gap-4 justify-center items-center px-2'>
        <h2 className='text-5xl md:text-7xl 2xl:text-8xl font-bold leading-tight text-center'>Join the Movement</h2>
        <h5 className={`${gilroy_semibold.className} text-center text-4xl md:w-3xl`}>
          Together, Let’s Make Saving a Way of Life
        </h5>
        <h6 className={`${gilroy_semibold.className} text-3xl px-4 md:px-10 text-center`}>Be part of a mission that’s changing how India saves. At Haatak, we’re building more than an app — we’re creating a culture of smart, secure, and daily saving with digital gold.</h6>
      </div>

      {/* Search Input */}
      <div className={`${albra_grotesk.className} flex justify-center items-center gap-6 px-2`}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder='Find Openings'
          className='border-[2px] border-[#2E0A49] px-4 py-4 w-2xl rounded-[6px] focus:outline-[2px] focus:outline-[#2E0A49] text-xl'
        />

        <div className="bg-gradient-to-br from-[#F3C862] via-[#FFE196] to-[#D99A26] p-1 rounded-lg">
          <button className="hidden md:block bg-gradient-to-br from-[#E7CB86] via-[#FFF4DF] to-[#E7CB86] px-4 py-4 rounded-[6px] text-xl font-semibold">
            Discover roles
          </button>
          <button className="md:hidden block bg-gradient-to-br from-[#E7CB86] via-[#FFF4DF] to-[#E7CB86] px-4 py-4 rounded-[6px]">
            <SearchIcon />
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="px-6">
        {loading ? (
          <Carousel>
            <CarouselContent>
              {Array.from({ length: 4 }).map((_, idx) => (
                <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/3">
                  <div className="w-72 h-72 flex flex-col justify-between bg-[#EDB6691A] border border-[#000000] px-4 py-4 space-y-2 animate-pulse">
                    <Skeleton className="h-5 w-24 rounded bg-[#d8c5aa]" />
                    <Skeleton className="h-6 w-40 rounded bg-[#d8c5aa]" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-full rounded bg-[#e1d4c0]" />
                      <Skeleton className="h-4 w-11/12 rounded bg-[#e1d4c0]" />
                      <Skeleton className="h-4 w-3/4 rounded bg-[#e1d4c0]" />
                    </div>
                    <div className="flex gap-6">
                      <Skeleton className="h-4 w-16 rounded bg-[#d8c5aa]" />
                      <Skeleton className="h-4 w-1 rounded bg-[#d8c5aa]" />
                      <Skeleton className="h-4 w-16 rounded bg-[#d8c5aa]" />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        ) : (
          <Carousel opts={{ align: "start", loop: true }} className="w-full max-w-6xl mx-auto px-4">
            <CarouselContent className="mx-10">
              {filteredJobs.map((job) => (
                <CarouselItem key={job.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="w-72 h-72 flex flex-col justify-between bg-[#EDB6691A] border-[1px] border-[#000000] px-4 py-4">
                    <h6 className="text-xl uppercase text-[#000000]">{job.role}</h6>
                    <h5 className="text-2xl">{job.title}</h5>
                    <h6 className='text-md line-clamp-3'>{job.description}</h6>

                    <div className='flex gap-6 uppercase text-[#000000]'>
                      <p>{job.type}</p>
                      <span>|</span>
                      <p>{job.location}</p>
                    </div>
                    <button
                      onClick={() => handleApplyClick(job.id)}
                      className="mt-4 bg-[#2E0A49] text-white px-4 py-2 rounded-md transition-all duration-300 transform hover:scale-105 hover:bg-[#2E0A49]/90 flex items-center justify-between group-hover:bg-gradient-to-r group-hover:from-[#F3C862] group-hover:via-[#FFE196] group-hover:to-[#D99A26]"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center gap-4 mt-4">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
}

export default JoinJourneySection;
