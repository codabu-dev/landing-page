import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
import { cn } from '@/lib/cn';
import Autoplay from 'embla-carousel-autoplay';
import { Check, Github } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis
} from 'recharts';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { CountingNumber } from '../ui/counter';

const people = [
  '/images/people/person1.png',
  '/images/people/person2.png',
  '/images/people/person3.png',
  '/images/people/person4.png'
];

const chartData = [
  { month: 'Jan', without: 12, with: 18 },
  { month: 'Feb', without: 8, with: 24 },
  { month: 'Mar', without: 15, with: 31 },
  { month: 'Apr', without: 11, with: 28 },
  { month: 'May', without: 9, with: 35 },
  { month: 'Jun', without: 14, with: 42 }
];

const chartConfig = {
  without: {
    label: 'No Bounties',
    color: 'var(--destructive)'
  },
  with: { label: 'With Bounties', color: 'var(--primary)' }
};

export function SolvedIssuesChart() {
  return (
    <ChartContainer config={chartConfig} className='w-full h-40 md:h-60'>
      <ResponsiveContainer width='100%' height='100%'>
        <AreaChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey='month' tickLine axisLine={false} tickMargin={8} />
          <ChartTooltip cursor={false} content={<ChartTooltipContent />} />

          <defs>
            {['without', 'with'].map((key) => (
              <linearGradient
                key={key}
                id={`fill${key}`}
                x1='0'
                y1='0'
                x2='0'
                y2='1'
              >
                <stop
                  offset='5%'
                  stopColor={`var(--color-${key})`}
                  stopOpacity={0.8}
                />
                <stop
                  offset='95%'
                  stopColor={`var(--color-${key})`}
                  stopOpacity={0.1}
                />
              </linearGradient>
            ))}
          </defs>

          {['without', 'with'].map((key) => (
            <Area
              key={key}
              dataKey={key}
              type='natural'
              fill={`url(#fill${key})`}
              fillOpacity={0.4}
              stroke={`var(--color-${key})`}
              stackId='a'
              strokeWidth={3}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}

const FeaturesSection = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <section
      id='features'
      className='flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-24'
    >
      <div className='flex flex-col w-full max-w-7xl text-left gap-2'>
        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight'>
          Why GitHub Bounties
        </h2>

        <p className='text-gray-600 text-xl max-w-2xl'>
          Your GitHub issues resolved faster, cheaper and with zero risk.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 auto-rows-fr'>
          <Card className='flex flex-col h-full'>
            <CardHeader className='flex-shrink-0'>
              <CardTitle>Cost Effective</CardTitle>
              <p className='text-gray-600 text-md leading-relaxed'>
                Skip expensive contractor hourly rates and lengthy hiring
                processes. Set your own bounty amount and only pay when the
                issue is actually solved.
              </p>
              <Button
                asChild
                variant='secondary'
                className='bg-neutral-200/60 hover:bg-neutral-200 text-black mt-1'
              >
                <Link href='#how-it-works'>Learn More</Link>
              </Button>
            </CardHeader>

            <CardContent className='flex-grow flex flex-col items-center justify-center'>
              <div className='rounded-2xl shadow-sm py-4 px-15 bg-gray-100/30 backdrop-blur-sm border border-neutral-200/40 flex flex-col items-center gap-4'>
                <div className='w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg shadow-green-400/25'>
                  <Check className='w-8 h-8 text-white' strokeWidth={2.5} />
                </div>

                <span className='text-3xl font-bold text-black tracking-tight'>
                  €250.00
                </span>

                <div className='space-y-3 w-full'>
                  <div className='h-2 w-full bg-gray-200/80 rounded-full'></div>
                  <div className='h-2 w-4/5 bg-gray-200/80 rounded-full mx-auto'></div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className='flex flex-col h-full'>
            <CardHeader className='flex-shrink-0'>
              <CardTitle>Zero Risk</CardTitle>
              <p className='text-gray-600 text-md leading-relaxed'>
                There are no upfront fees or subscriptions. You set the bounty
                amount and only pay if you approve and merge the solution. No
                commitments, ever.
              </p>
              <Button
                asChild
                variant='secondary'
                className='bg-neutral-200/60 hover:bg-neutral-200 text-black mt-1'
              >
                <Link href='#how-it-works'>Learn More</Link>
              </Button>
            </CardHeader>

            <CardContent className='flex-grow flex flex-col items-center justify-end'>
              <CountingNumber
                number={58}
                inView={true}
                transition={{ stiffness: 100, damping: 30 }}
                className='text-8xl font-[900]'
              />
              <span className='text-sm font-medium text-gray-500'>
                Teams Trust Us
              </span>
            </CardContent>
          </Card>

          <Card className='flex flex-col h-full'>
            <CardHeader className='flex-shrink-0'>
              <CardTitle>Seamless Integration</CardTitle>
              <p className='text-gray-600 text-md leading-relaxed'>
                It works directly within your existing GitHub workflow. Set a
                bounty with a simple comment. No new tools, dashboards, or
                platforms to learn.
              </p>
              <Button
                asChild
                variant='secondary'
                className='bg-neutral-200/60 hover:bg-neutral-200 text-black mt-1'
              >
                <Link href='#how-it-works'>Learn More</Link>
              </Button>
            </CardHeader>

            <CardContent className='flex-grow flex flex-col items-center justify-end'>
              <button
                onClick={() => setIsEnabled(!isEnabled)}
                className={cn(
                  'relative inline-flex h-20 w-40 items-center rounded-full transition-all duration-300 focus:outline-none focus:none',
                  isEnabled ? 'bg-green-600' : 'bg-gray-300'
                )}
              >
                <div
                  className={cn(
                    'inline-flex h-16 w-16 items-center justify-center transform rounded-full bg-white shadow-lg transition-transform duration-300',
                    isEnabled ? 'translate-x-22' : 'translate-x-2'
                  )}
                >
                  <Github size={28} className='text-gray-700' />
                </div>
              </button>

              <p className='text-sm font-medium text-gray-500 mt-2'>
                Instant GitHub Setup
              </p>
            </CardContent>
          </Card>

          <Card className='md:col-span-2 flex flex-col h-full'>
            <CardHeader className='flex-shrink-0'>
              <CardTitle>Faster Results</CardTitle>
              <p className='text-gray-600 text-md leading-relaxed'>
                Issues resolved in days, not weeks. Competitive bounties
                motivate developers to work quickly while maintaining quality.
                Global talent pool means someone is always available to tackle
                your problem.
              </p>
              <Button
                asChild
                variant='secondary'
                className='bg-neutral-200/60 hover:bg-neutral-200 text-black mt-1'
              >
                <Link href='#how-it-works'>Learn More</Link>
              </Button>
            </CardHeader>

            <CardContent className='flex-grow flex flex-col'>
              <div className='flex-grow w-full'>
                <SolvedIssuesChart />
              </div>
              <p className='text-sm font-medium text-gray-500 mt-2 text-center'>
                Issues Resolved Monthly
              </p>
            </CardContent>
          </Card>

          <Card className='overflow-hidden bg-black flex flex-col relative h-full'>
            <CardHeader className='z-10 text-left flex-shrink-0'>
              <CardTitle className='text-white text-2xl font-bold'>
                Quality Developers
              </CardTitle>
              <p className='text-neutral-300 text-md leading-relaxed'>
                Our community includes experienced developers from around the
                world.
              </p>
              <Button asChild variant='secondary' className='mt-1'>
                <Link href='#how-it-works'>Learn More</Link>
              </Button>
            </CardHeader>

            <div className='absolute bottom-0 left-0 z-0 p-4 flex-grow'>
              <Carousel
                plugins={[Autoplay({ delay: 2000 })]}
                opts={{ loop: true }}
                className='w-full h-full'
              >
                <CarouselContent className='h-full -ml-0'>
                  {people.map((src, idx) => (
                    <CarouselItem key={idx} className='h-full pl-0'>
                      <img
                        src={src}
                        alt={`Community member ${idx + 1}`}
                        className='w-full h-full object-cover opacity-80'
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
