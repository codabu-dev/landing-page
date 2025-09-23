'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  struggles: z.array(z.string()).min(1, 'Please select at least one struggle'),
  additionalInfo: z.string().optional()
});

type FormData = z.infer<typeof formSchema>;

const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: '',
    struggles: [],
    additionalInfo: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [otherStruggleText, setOtherStruggleText] = useState('');
  const [showOtherStruggle, setShowOtherStruggle] = useState(false);

  const struggleOptions = [
    'Issues pile up faster than we can solve them',
    'Hard to find qualified developers',
    'Development costs are too high',
    'Issues sit unresolved for weeks/months',
    'Team is overwhelmed with backlog',
    'Other'
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleCheckboxChange = (value: string, field: 'struggles') => {
    if (value !== 'Other') {
      setFormData((prev) => ({
        ...prev,
        [field]: prev[field].includes(value)
          ? prev[field].filter((item) => item !== value)
          : [...prev[field], value]
      }));
    } else {
      setShowOtherStruggle(!showOtherStruggle);

      if (!showOtherStruggle) {
        setFormData((prev) => ({
          ...prev,
          [field]: prev[field].filter((item) => !item.startsWith('Other: '))
        }));

        setOtherStruggleText('');
      }
    }
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleOtherTextChange = (text: string, field: 'struggles') => {
    const trimmed = text.trim();
    setOtherStruggleText(text);

    setFormData((prev) => {
      const newFieldArray = prev[field].filter(
        (item) => !item.startsWith('Other: ')
      );
      if (trimmed) {
        newFieldArray.push(`Other: ${trimmed}`);
      }
      return { ...prev, [field]: newFieldArray };
    });
    if (!trimmed) {
      setShowOtherStruggle(false);
    }
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      const validatedData = formSchema.parse(formData);

      const response = await fetch('/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: validatedData.email,
          struggles: validatedData.struggles,
          additionalInfo: validatedData.additionalInfo
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit reservation');
      }

      console.log('Form submitted:', validatedData);

      toast('🎉 Early Access Confirmed!', {
        description:
          'Thank you for joining the Codabu early access waitlist. We will get back to you soon.',
        duration: 5000
      });
      router.push('/');
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.issues.forEach((issue) => {
          if (issue.path.length > 0) {
            fieldErrors[issue.path[0].toString()] = issue.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        console.log(error);
        toast('Submission Failed', {
          description: 'An error occurred. Please try again later.',
          duration: 5000
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='flex flex-col text-left w-full max-w-4xl mx-auto gap-8 px-4 sm:px-6 lg:px-8 py-20 lg:py-24'>
      <div className='flex flex-col gap-2'>
        <h2 className='font-bold text-4xl md:text-6xl leading-tight tracking-tight'>
          Get Early Access to Codabu
        </h2>

        <p className='text-gray-600 text-xl max-w-2xl'>
          Tell us a bit about your needs, and get early access to faster,
          risk-free GitHub issue resolution.
        </p>
      </div>

      <form onSubmit={handleSubmit} className='space-y-8'>
        <div>
          <Label htmlFor='email'>Email*</Label>
          <Input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleInputChange}
            placeholder='Enter your email address'
            error={!!errors.email}
          />
          {errors.email && (
            <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
          )}
        </div>

        <div>
          <Label className='cursor-auto'>
            What do you struggle with the most?*
          </Label>
          <div className='mt-3'>
            {struggleOptions.map((option, index) => (
              <Label
                key={index}
                className='flex items-center space-x-1 font-normal'
              >
                <Input
                  type='checkbox'
                  checked={
                    option === 'Other'
                      ? showOtherStruggle
                      : formData.struggles.includes(option)
                  }
                  onChange={() => handleCheckboxChange(option, 'struggles')}
                  className='w-4 h-4'
                  error={!!errors.struggles}
                />
                <span className='text-gray-700'>{option}</span>
              </Label>
            ))}
          </div>
          {showOtherStruggle && (
            <div>
              <Input
                type='text'
                id='otherStruggle'
                value={otherStruggleText}
                onChange={(e) =>
                  handleOtherTextChange(e.target.value, 'struggles')
                }
                placeholder='Enter your other struggle'
                error={!!errors.struggles}
              />
            </div>
          )}
          {errors.struggles && (
            <p className='text-red-500 text-sm mt-1'>{errors.struggles}</p>
          )}
        </div>

        <div>
          <Label htmlFor='additionalInfo'>
            Is there anything else you would like to highlight?
          </Label>
          <Textarea
            id='additionalInfo'
            name='additionalInfo'
            value={formData.additionalInfo}
            onChange={handleInputChange}
            placeholder='Enter additional information'
            rows={4}
          />
        </div>

        {errors.submit && (
          <p className='text-red-500 text-sm'>{errors.submit}</p>
        )}

        <Button type='submit' disabled={isSubmitting} className='w-full'>
          {isSubmitting ? (
            <div className='flex items-center justify-center space-x-2'>
              <div className='w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin'></div>
              <span>Submitting...</span>
            </div>
          ) : (
            'Get Early Access'
          )}
        </Button>
      </form>
    </div>
  );
};

export default Form;
