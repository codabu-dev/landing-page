import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Coins, Github, GitMerge, Plus, Settings } from 'lucide-react';
import { Button } from '../ui/button';

const HowItWorksSection = () => {
  return (
    <section
      id='how-it-works'
      className='flex flex-col justify-center items-center w-full px-4 sm:px-6 lg:px-8 gap-6 sm:gap-8 lg:gap-12 pb-10 sm:pb-16 lg:pb-24'
    >
      <div className='flex flex-col w-full max-w-7xl text-center sm:text-left gap-3 sm:gap-4'>
        <h2 className='font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight'>
          How GitHub Bounties Work
        </h2>

        <p className='text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto sm:mx-0'>
          Post an issue, set a bounty, and get it solved by developers
          worldwide. Pay only when code is approved and merged.
        </p>
      </div>

      <div className='w-full max-w-7xl'>
        <Tabs defaultValue='integrate'>
          <div className='flex justify-center mb-6'>
            <TabsList className='grid grid-cols-2 sm:grid-cols-4 w-fit'>
              <TabsTrigger value='integrate'>
                <Settings className='h-4 w-4' />
                Integrate
              </TabsTrigger>
              <TabsTrigger value='create-issue'>
                <Plus className='h-4 w-4' />
                Create Issue
              </TabsTrigger>
              <TabsTrigger value='set-bounty'>
                <Coins className='h-4 w-4' />
                Set Bounty
              </TabsTrigger>
              <TabsTrigger value='merge'>
                <GitMerge className='h-4 w-4' />
                Merge
              </TabsTrigger>
            </TabsList>
          </div>

          <Card className='w-full p-10 sm:p-12 lg:p-16'>
            <CardContent>
              <TabsContent value='integrate'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 h-full min-h-[300px] sm:min-h-[400px]'>
                  <div className='flex flex-col items-start justify-between gap-4 sm:gap-6'>
                    <div className='px-4 py-1.5 bg-neutral-200/50 rounded-full text-sm font-bold'>
                      1st Step
                    </div>

                    <div className='flex flex-col gap-2 sm:gap-3'>
                      <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
                        Integrate
                      </h3>
                      <h4 className='text-2xl sm:text-3xl font-bold text-gray-900 leading-tight'>
                        Install the GitHub Bot
                      </h4>
                      <p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                        Grant our bot access to your repo with a few clicks. No
                        new platforms or complex setups required.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center justify-center'>
                    <div className='bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden w-full max-w-md'>
                      <div className='bg-gray-50 px-4 sm:px-6 py-3 border-b border-gray-200'>
                        <div className='flex items-center gap-3'>
                          <div className='w-6 h-6 sm:w-8 sm:h-8 bg-gray-800 rounded-full flex items-center justify-center'>
                            <Github className='w-3 h-3 sm:w-4 sm:h-4 text-white' />
                          </div>
                          <div>
                            <h4 className='font-semibold text-gray-900 text-sm sm:text-base'>
                              Install Codabu Bot
                            </h4>
                            <p className='text-xs text-gray-500'>
                              GitHub App Installation
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-4 sm:p-6 flex flex-col gap-5'>
                        <div className='w-full h-20 sm:h-24 bg-gray-100 rounded-lg p-3'>
                          <div className='space-y-2'>
                            <div className='h-2 sm:h-3 bg-gray-200 rounded w-3/4'></div>
                            <div className='h-2 sm:h-3 bg-gray-200 rounded w-1/2'></div>
                            <div className='h-2 sm:h-3 bg-gray-200 rounded w-2/3'></div>
                          </div>
                        </div>
                        <Button className='w-full'>Install Bot</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value='create-issue'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 h-full min-h-[300px] sm:min-h-[400px]'>
                  <div className='flex flex-col items-start justify-between gap-4 sm:gap-6'>
                    <div className='px-4 py-1.5 bg-neutral-200/50 rounded-full text-sm font-bold'>
                      2nd Step
                    </div>

                    <div className='flex flex-col gap-2 sm:gap-3'>
                      <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
                        Create Issue
                      </h3>

                      <h4 className='text-2xl sm:text-3xl font-bold text-gray-900 leading-tight'>
                        Post a Github Issue
                      </h4>
                      <p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                        Describe the bug, feature, or problem exactly as you
                        normally would. Our bot automatically detects new
                        issues.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center justify-center'>
                    <div className='bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden w-full max-w-md'>
                      <div className='bg-gray-50 px-4 sm:px-6 py-3 border-b border-gray-200'>
                        <h4 className='font-semibold text-gray-900 text-sm sm:text-base'>
                          New Issue
                        </h4>
                      </div>
                      <div className='p-4 sm:p-6 space-y-3 sm:space-y-4'>
                        <div>
                          <label className='block text-xs sm:text-sm font-medium text-gray-700 mb-2'>
                            Title
                          </label>
                          <div className='w-full h-8 sm:h-10 bg-gray-100 rounded-lg flex items-center px-3'>
                            <span className='text-gray-500 text-xs sm:text-sm truncate'>
                              Fix authentication bug in login flow
                            </span>
                          </div>
                        </div>
                        <div>
                          <label className='block text-xs sm:text-sm font-medium text-gray-700 mb-2'>
                            Description
                          </label>
                          <div className='w-full h-20 sm:h-24 bg-gray-100 rounded-lg p-3'>
                            <div className='space-y-2'>
                              <div className='h-2 sm:h-3 bg-gray-200 rounded w-3/4'></div>
                              <div className='h-2 sm:h-3 bg-gray-200 rounded w-1/2'></div>
                              <div className='h-2 sm:h-3 bg-gray-200 rounded w-2/3'></div>
                            </div>
                          </div>
                        </div>
                        <div className='flex gap-2 flex-wrap'>
                          <div className='px-2 sm:px-3 py-1 bg-red-100 text-red-700 rounded-full text-xs font-medium'>
                            bug
                          </div>
                          <div className='px-2 sm:px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-medium'>
                            high-priority
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value='set-bounty'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 h-full min-h-[300px] sm:min-h-[400px]'>
                  <div className='flex flex-col items-start justify-between gap-4 sm:gap-6'>
                    <div className='px-4 py-1.5 bg-neutral-200/50 rounded-full text-sm font-bold'>
                      3th Step
                    </div>

                    <div className='flex flex-col gap-2 sm:gap-3'>
                      <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
                        Set Bounty
                      </h3>
                      <h4 className='text-2xl sm:text-3xl font-bold text-gray-900 leading-tight'>
                        Set the Bounty
                      </h4>
                      <p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                        Trigger the bounty by simply commenting{' '}
                        <span className='bg-neutral-200/60 px-1 sm:px-2 rounded-sm text-sm sm:text-base'>
                          \bounty $$$
                        </span>
                        . The issue is instantly published to our developer
                        network.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center justify-center'>
                    <div className='bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden w-full max-w-md'>
                      <div className='bg-gray-50 px-4 sm:px-6 py-3 border-b border-gray-200'>
                        <div className='flex items-center gap-3'>
                          <div className='w-6 h-6 sm:w-8 sm:h-8 bg-green-600 rounded-full flex items-center justify-center'>
                            <span className='text-white text-xs sm:text-sm font-bold'>
                              JD
                            </span>
                          </div>
                          <div>
                            <h4 className='font-semibold text-gray-900 text-sm sm:text-base'>
                              John Doe
                            </h4>
                            <p className='text-xs text-gray-500'>
                              commented 2 minutes ago
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='p-4 sm:p-6'>
                        <div className='font-mono text-xs sm:text-sm bg-white rounded border p-2 sm:p-3'>
                          <span>\bounty</span>{' '}
                          <span className='text-green-600 font-bold'>$500</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value='merge'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 h-full min-h-[300px] sm:min-h-[400px]'>
                  <div className='flex flex-col items-start justify-between gap-4 sm:gap-6'>
                    <div className='px-4 py-1.5 bg-neutral-200/50 rounded-full text-sm font-bold'>
                      4th Step
                    </div>

                    <div className='flex flex-col gap-2 sm:gap-3'>
                      <h3 className='text-base sm:text-lg font-semibold text-gray-900'>
                        Merge
                      </h3>
                      <h4 className='text-2xl sm:text-3xl font-bold text-gray-900 leading-tight'>
                        Review, Merge and Pay
                      </h4>
                      <p className='text-base sm:text-lg text-gray-600 leading-relaxed'>
                        Developers will submit pull requests. You only pay the
                        bounty when you approve and merge the solution that
                        fixes your issue.
                      </p>
                    </div>
                  </div>

                  <div className='flex items-center justify-center'>
                    <div className='bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden w-full max-w-md'>
                      <div className='bg-gray-50 px-4 sm:px-6 py-3 border-b border-gray-200'>
                        <h4 className='font-semibold text-gray-900 text-sm sm:text-base'>
                          Pull Request #456
                        </h4>
                      </div>
                      <div className='p-4 sm:p-6 space-y-3'>
                        <div className='text-gray-900 font-semibold text-sm sm:text-base'>
                          Fix authentication bug
                        </div>
                        <div className='w-full h-20 sm:h-24 bg-gray-100 rounded-lg p-3'>
                          <div className='space-y-2'>
                            <div className='h-2 sm:h-3 bg-gray-200 rounded w-3/4'></div>
                            <div className='h-2 sm:h-3 bg-gray-200 rounded w-1/2'></div>
                            <div className='h-2 sm:h-3 bg-gray-200 rounded w-2/3'></div>
                          </div>
                        </div>
                        <div className='flex items-center gap-2 text-xs sm:text-sm text-gray-600'>
                          <div className='w-2 h-2 rounded-full bg-green-500'></div>
                          checks passed
                        </div>
                        <div className='grid grid-cols-3 gap-1 sm:gap-2 text-xs'>
                          <div className='bg-gray-100 rounded px-1 sm:px-2 py-1 text-gray-700 text-center'>
                            +132
                          </div>
                          <div className='bg-gray-100 rounded px-1 sm:px-2 py-1 text-gray-700 text-center'>
                            -47
                          </div>
                          <div className='bg-gray-100 rounded px-1 sm:px-2 py-1 text-gray-700 text-center'>
                            5 files
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </CardContent>
          </Card>
        </Tabs>
      </div>
    </section>
  );
};

export default HowItWorksSection;
