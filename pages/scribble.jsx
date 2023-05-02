import Image from 'next/image';
import React from 'react';
import scribbleImg from '../public/assets/projects/scribble-board.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const scribble = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={scribbleImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Scribble App</h2>
          <h3>HTML Canvas / Vanilla JS</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
            I created this website in collaboration with seniors at the time for Takneek'23, 
            which gave me more knowledge about github and teamwork.
          </p>
          <p>
          The application is minimal in design with features ranging from basic to
advanced. It has most of the features which a user can find useful. It can
be simply accessible from web browsers and can be used without any
difficulty. It has panels for tools, brushes, colours and shapes. Users also
get an option to download the canvas drawing as an image. The
application has different kinds of pens to draw.
          </p>
          <a
            href='https://github.com/ykdromar/Scribble_Board'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://ykdromar.me/Scribble_Board/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>
          <br></br><br></br><br></br>

          <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default scribble;
