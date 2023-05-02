import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import scribbleImg from '../public/assets/projects/scribble-board.png';
import cfrssImg from '../public/assets/projects/cf-rss-poster.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='CF-RSS'
            backgroundImg={cfrssImg}
            projectUrl='/cfrss'
          />
          <ProjectItem
            title='Scribble Board'
            backgroundImg={scribbleImg}
            projectUrl='/scribble'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
