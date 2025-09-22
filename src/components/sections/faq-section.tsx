import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '../ui/accordion';
import { Button } from '../ui/button';
import { Card, CardHeader, CardTitle } from '../ui/card';

const faqs = [
  {
    question: 'What if no one solves my issue? Do I still pay?',
    answer:
      'Absolutely not. You only pay when a developer submits a solution and you approve it. If no one solves your issue, you pay nothing. You can cancel the bounty anytime with no cost.'
  },
  {
    question: 'Is there any upfront cost or subscription fee?',
    answer:
      'No. There are no upfront costs, monthly fees, or subscriptions. You only pay the bounty amount when your issue is successfully solved and you approve the solution.'
  },
  {
    question: 'How do I know developers are qualified?',
    answer:
      "You can see each developer's GitHub profile, previous work, and reputation on our platform before they start working. You review their actual code solution before approving payment, so you're always in control of quality."
  },
  {
    question: 'How long does it typically take to get solutions?',
    answer:
      'Most issues receive solutions within 3-7 days, though simple fixes often come faster. Complex problems may take 1-2 weeks. The bounty amount and problem complexity affect response time.'
  },
  {
    question: "What if I don't like any of the solutions",
    answer:
      "You're never obligated to accept a solution. If submitted solutions don't meet your standards, you don't pay anything. You can provide feedback and wait for better solutions, or cancel the bounty entirely."
  },
  {
    question: 'Can I cancel or change the bounty amount after posting?',
    answer:
      'Yes. You can increase, decrease, or cancel your bounty anytime before approving a solution. If developers are already working, we recommend increasing rather than decreasing to maintain good relationships.'
  },
  {
    question: 'What happens if multiple developers submit good solutions?',
    answer:
      "You choose one winner who gets the full bounty. You're not obligated to pay multiple developers. Pick the solution that best fits your needs - first submission, best quality, or most complete implementation."
  },
  {
    question: 'What if the solution breaks something in my code?',
    answer:
      "You test the solution before approving payment. If you approve a solution that later causes issues, you can contact the developer for fixes. However, you're responsible for testing code before merging it into your project."
  }
];

const FaqSection = () => {
  return (
    <section
      id='faq'
      className='flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 lg:pt-24 pb-6 sm:py-9 lg:py-16'
    >
      <div className='flex flex-col w-full max-w-7xl text-left gap-2'>
        <h2 className='font-bold text-4xl md:text-6xl leading-tight tracking-tight'>
          Frequently Asked Questions
        </h2>

        <div className='flex flex-col lg:flex-row gap-8 mt-4'>
          <div className='w-full lg:w-2/3'>
            <Accordion
              type='single'
              collapsible
              className='w-full px-0 space-y-4'
            >
              {faqs.map(({ question, answer }, idx) => (
                <AccordionItem key={question} value={`item-${idx + 1}`}>
                  <AccordionTrigger className='cursor-pointer py-5 hover:no-underline'>
                    <h4 className='text-xl font-[600] text-left w-full'>
                      {question}
                    </h4>
                  </AccordionTrigger>
                  <AccordionContent className='pb-5 pr-8'>
                    <p className='text-lg font-[500] text-gray-600'>{answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className='w-full lg:w-1/3'>
            <Card>
              <CardHeader>
                <span className='text-md font-semibold'>Contact us</span>
                <CardTitle>Have more questions?</CardTitle>
                <p className='text-gray-600 text-md leading-relaxed'>
                  We would love to hear from you. Reach out to us at{' '}
                  <a
                    href='mailto:support@codabu.com'
                    className='text-blue-600 hover:text-blue-800 underline transition-colors'
                  >
                    support@codabu.com
                  </a>
                </p>
                <Button
                  asChild
                  variant='secondary'
                  className='bg-neutral-200/60 hover:bg-neutral-200 text-black w-fit mt-3'
                >
                  <Link href='mailto:support@codabu.com'>Email Us</Link>
                </Button>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
