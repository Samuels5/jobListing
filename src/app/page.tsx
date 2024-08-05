// 'use client'
import Image from "next/image";
import Cards from "./Cards";
import Part from './Part';
import Link from 'next/link';
import jobs from './../../public/jobs.json';



export default function Home() {
  
  const card = <div>
    {jobs.job_postings.map((job,ind)=>(<Link key={job.title}  href={{
      pathname :'/about',
      query : {
        name: job.title,
        id: ind
      }
      }} > 
      <Cards key={ind} {...job} /></Link>))}
  
  </div>
  // console.log(jobs)
  return (
    <div>
      {/* <Part/> */}
      <div className="pl-[85px] pt-32 pr-[16rem] ">
        <div className="flex justify-between items-center">
        <div>
        <div className="font-black text-4xl">Opportunities</div>
        <div className='font-extralight text-gray-400 pt-1'>Showing 73 results</div>
        </div>
        <div className="">Sort by: <strong>Most relevant</strong></div>
        </div>
        {card}
      </div>
    </div>
  );
}
