import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Saaidin | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Saaidin Mat Esa</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/dinwebdev'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/Saaidin'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        Skills
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Front-End Web Developer
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            {/* <span className='px-2'>|</span>SQL */}
            {/* <span className='px-2'>|</span>NoSQL */}
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> REST API
          </p>
          
          {/* <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p> */}
          
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        Experience 
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              DINWEBDEV
            </span>
            <span className='px-2'>|</span>Alor Setar, Malaysia
          </p>
          <p className='py-1 italic'>Front End Web Developer & Web Master (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured comprehensive mobile responsive UI layouts with
              understanding of HTML, CSS, and JavaScript.
            </li>
            <li>
              Troubleshoot issues and concerns, configure operation and analytic
              plugins, and design changes as needed.
            </li>
            <li>
              Worked directly with a diverse client base to understand and
              implement multiple technologies and programs.
            </li>
            <li>
              Platform migration managing DNS servers as well as MX records and
              ensuring a smooth migration process.
            </li>
          </ul>
        </div>


        Personal Experience 
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Teaching & Mentoring Web Development
            </span>
            <span className='px-2'>|</span>Alor Setar, Malaysia
          </p>
          <p className='py-1 italic'>DinWebDev - Youtube Channel (2021 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              In 2021 I started “DinWebDev”, a YouTube channel focused on
              sharing what I’m learning in web development, specifically
              front-end development.
            </li>
            <li>
              Private 1 on 1 Zoom coaching calls related to web development.
              More specifically debugging, teaching basic web development
              concepts and code reviews.
            </li>
          </ul>
        </div>

        
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
      
        Experience 
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>TH TECHNOLOGIES SDN BHD, KL</span>
            <span className='px-2'>|</span>Kuala Lumpur, Malaysia
          </p>
          <p className='py-1 italic'>Senior Contract Executive (2017 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Advising on the potential of a site and working out what a client can afford to build, often termed ‘feasibility’.
            </li>
            <li>
               Presenting detailed information on the cost of particular elements of work on a periodic basis to enable payment for those works carried out to date. This process is known as ‘valuations’.
            </li>
            <li>
               Organizing the division of a project into its component work packages, then awarding these work packages to smaller, more specialized construction companies (known as subcontractors) and, in that process, finding out who offers the best deal.
            </li>
            <li>
               Dealing with contractual and legal matters.
            </li>
            <li>
                Managing costs to make sure that the initial budget isn’t exceeded.
            </li>
            <li>
                Arranging staff payments and, at the end of a job, settling the final accounts.
            </li>
            <li>
                Acting as financial advisors and monitoring progress for the client.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
