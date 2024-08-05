// 'use client'
import React from 'react';
import jobs from './../../../public/jobs.json';
import Image from 'next/image';

const Part = ({searchParams} : {
  searchParams:{
  name:string;
  id : number;
  }
}) => {
  const num = Number(searchParams.id)
  return (
    <div>
        <div className="pl-8 pt-8 flex">
        <div className="w-auto">
          <div className="text-3xl mt-16 pb-4 font-bold">Description</div>
          <p className="mb-14">{jobs.job_postings[num].description}</p>
          <div className="text-3xl pb-4 font-bold">Responsibilities</div>
          <div className="">
            {jobs.job_postings[num].responsibilities.map(val => <div className='flex' key=''><Image src='/ico.png' alt='v' width={15} height={5}/><div key='' className="mb-1">{val}</div></div>)}
          </div>
          <div className="mt-14 text-3xl pb-4 font-bold">Ideal Candidate we want</div>
          <ul>
            <li className="mb-2">Young({jobs.job_postings[num].ideal_candidate.age} year old) gender {jobs.job_postings[num].ideal_candidate.gender} {jobs.job_postings[num].title}</li>
            {jobs.job_postings[num].ideal_candidate.traits.map((val) => <div key='' className="mb-2">{val}</div>)}
          </ul>
          <div className="mt-14 text-3xl pb-4 font-bold">When & Where</div>
          <div className='flex justify-center mb-5'>
          <Image src='/loc.png' alt='v' width={35} height={20}/>
          <p className='pl-2'>{jobs.job_postings[num].when_where}</p>
          </div>

        </div>
        <div className="ml-12 ">
          <div className="border-b-2 border-gray-400 mr-8">
            <div className="text-3xl w-72 mb-2">About</div>
              <div className="flex mb-4">
                <div><Image src='/pos.png' alt='v' width={35} height={20}/></div>
                <div className="ml-4 w-28">
                  <div >Posted On</div>
                  <div>{jobs.job_postings[num].about.posted_on}</div>
                </div>
              </div>
              <div className="flex mb-4">
                <div><Image src='/dea.png' alt='v' width={35} height={20}/></div>
                <div className="ml-4 w-28">
                  <div >Deadline</div>
                  <div>{jobs.job_postings[num].about.deadline}</div>
                </div>
              </div>
              <div className="flex mb-4">
                <div><Image src='/loc.png' alt='v' width={35} height={20}/></div>
                <div className="ml-4 w-28">
                  <div >Location</div>
                  <div>{jobs.job_postings[num].about.location}</div>
                </div>
              </div>
              <div className="flex mb-4">
                <div><Image src='/end.png' alt='v' width={35} height={20}/></div>
                <div className="ml-4 w-28">
                  <div >Start Date</div>
                  <div>{jobs.job_postings[num].about.start_date}</div>
                </div>
              </div>
              <div className="flex mb-4">
                <div><Image src='/end.png' alt='v' width={35} height={20}/></div>
                <div className="ml-4 w-28">
                  <div >End Date</div>
                  <div>{jobs.job_postings[num].about.end_date}</div>
                </div>
              </div>
          </div>
          <div className=" border-b-2 border-gray-400 mr-8">
            <div className='font-mono font-semibold text-2xl text-indigo-950 py-5'>Categories</div>
            <div className='flex'>
            {jobs.job_postings[num].about.categories.map(val=><div key='' className='text-xs rounded-full bg-gray-100 p-1 mr-1 text-yellow-500'>{val}</div>)}
            </div>
          </div>
          <div className="mr-8">
            <div className='font-mono font-semibold text-2xl text-indigo-950 py-5'>Required  Skills</div>
            {jobs.job_postings[num].about.required_skills.map((val)=><button key = '' className='text-xs rounded-full bg-gray-100 p-1 mr-1 text-gray-900'>{val}</button>)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Part