import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { links } from '../navbar';
import { Button } from '../ui/button';

const FooterSection = () => {
  return (
    <section
      id='footer'
      className='flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-24 pb-10 bg-black text-white'
    >
      <div className='flex flex-col w-full max-w-7xl text-left gap-2'>
        <h2 className='font-bold text-4xl md:text-6xl leading-tight tracking-tight'>
          Ready to Clear Your Backlog?
        </h2>

        <p className='text-neutral-400 text-xl max-w-2xl'>
          Get early access and start clearing your backlog with global developer
          talent and enjoy exclusive early adopter benefits.
        </p>

        <Button asChild className='w-full sm:w-fit group mt-4'>
          <Link href='/form'>
            Get Early Access
            <ArrowRight className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1' />
          </Link>
        </Button>

        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 w-full mt-12'>
          <div className='md:col-span-2'>
            <h3 className='text-white font-semibold mb-4'>Navigation</h3>
            <div className='flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium'>
              {links.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  className='text-neutral-400 hover:text-white transition-colors'
                >
                  {name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className='border-t border-neutral-800 my-8 w-full'></div>

        <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
          <div className='text-neutral-400 text-sm'>
            © {new Date().getFullYear()} Codabu. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
