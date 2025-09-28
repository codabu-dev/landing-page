'use client';

import { ArrowRight, Pause, Play } from 'lucide-react';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Button } from '../ui/button';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id='hero'
      className='bg-black flex flex-col justify-center items-center w-full pt-20 sm:pt-28 md:pt-36 pb-6 sm:pb-8 md:pb-10 px-4 sm:px-6 lg:px-8 gap-6 md:gap-9'
    >
      <div className='flex flex-col w-full max-w-2xl text-center gap-6 md:gap-9'>
        <div className='flex items-center flex-col gap-3 sm:gap-4'>
          <div>
            <p className='text-white/60 text-sm sm:text-md md:text-lg mb-1'>
              Trusted by
              <b className='text-white'> 50+ dev teams </b>
              around the globe.
            </p>

            <h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tighter'>
              Stop Begging
              <br />
              <span>Developers</span> to
              <br />
              Fix Your Issues
            </h1>
          </div>

          <p className='text-base sm:text-lg md:text-xl text-neutral-400 max-w-2xl'>
            Connect your GitHub repo with motivated developers worldwide who
            solve your toughest issues for bounties you set.
          </p>
        </div>

        <div className='flex flex-col sm:flex-row gap-3 sm:gap-2 items-center justify-center'>
          <Button asChild className='w-full sm:w-fit group'>
            <Link href='/form'>
              Get Early Access
              <ArrowRight className='size-4 transition-transform duration-300 group-hover:translate-x-1' />
            </Link>
          </Button>
          <Button asChild variant='secondary' className='w-full sm:w-fit'>
            <Link href='#features'>See How It Works</Link>
          </Button>
        </div>
      </div>

      <div className='w-full max-w-full md:max-w-2xl lg:max-w-5xl relative group'>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className='w-full h-auto rounded-lg shadow-lg cursor-pointer'
          onClick={toggleVideo}
        >
          <source src='/videos/video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <button
          onClick={toggleVideo}
          className='absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg'
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          <div className='bg-black/50 rounded-full p-3'>
            {isPlaying ? (
              <Pause className='size-8 text-white' />
            ) : (
              <Play className='size-8 text-white' />
            )}
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
