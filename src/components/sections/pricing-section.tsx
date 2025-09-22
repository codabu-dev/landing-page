import {
  Ban,
  CircleOff,
  CreditCard,
  Headphones,
  MessageSquarePlus,
  Package,
  Wallet,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

const PricingSection = () => {
  return (
    <section
      id='pricing'
      className='flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-24'
    >
      <div className='flex flex-col w-full max-w-7xl text-left gap-2'>
        <h2 className='font-bold text-4xl md:text-6xl leading-tight tracking-tight'>
          Pricing
        </h2>

        <p className='text-gray-600 text-xl max-w-2xl'>
          Simple, pay-per-success pricing. No subscriptions, no upfront costs.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
          <Card>
            <CardHeader>
              <CardTitle>Standard</CardTitle>
              <p className='text-gray-600 text-md leading-relaxed mb-2'>
                Transparent pricing with no hidden fees or subscriptions.
              </p>
            </CardHeader>

            <CardContent className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2 font-semibold text-md mb-auto h-full'>
                <p>
                  <Zap className='inline size-5 mr-2 text-green-700' />
                  Access all features
                </p>
                <p>
                  <Wallet className='inline size-5 mr-2 text-green-700' />
                  Pay per solved bounty only
                </p>
                <p>
                  <Ban className='inline size-5 mr-2 text-green-700' />
                  Cancel anytime
                </p>
                <p>
                  <CreditCard className='inline size-5 mr-2 text-green-700' />
                  10% fee on solved bounties
                </p>
              </div>

              <Button asChild>
                <Link href='/form'>Get Started</Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Early Bird</CardTitle>
              <p className='text-gray-600 text-md leading-relaxed mb-2'>
                Jump in early with zero costs (limited spots available).
              </p>
            </CardHeader>

            <CardContent className='flex flex-col gap-6'>
              <div className='flex flex-col gap-2 font-semibold text-md mb-auto'>
                <p>
                  <Package className='inline size-5 mr-2 text-green-700' />
                  Everything from standard package
                </p>
                <p>
                  <CircleOff className='inline size-5 mr-2 text-green-700' />
                  0% platform fees
                </p>
                <p>
                  <Headphones className='inline size-5 mr-2 text-green-700' />
                  Priority support
                </p>
                <p>
                  <MessageSquarePlus className='inline size-5 mr-2 text-green-700' />
                  Feature request input
                </p>
              </div>

              <Button asChild>
                <Link href='/form'>Get Early Access</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
