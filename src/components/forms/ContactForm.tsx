'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {services} from '@/constants/services';
import {contactFormSchema, type ContactFormValues} from '@/lib/validations';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: ''
    }
  });

  function onSubmit(values: ContactFormValues) {
    console.log('Contact form values:', values);
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="rounded-3xl border bg-card p-5 shadow-sm sm:p-8">
      <div className="grid gap-5">
        <div>
          <label className="text-sm font-medium" htmlFor="name">Name</label>
          <Input id="name" className="mt-2" placeholder="Your name" {...register('name')} />
          {errors.name ? <p className="mt-1 text-xs text-red-600">{errors.name.message}</p> : null}
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="email">Email</label>
          <Input id="email" type="email" className="mt-2" placeholder="you@example.com" {...register('email')} />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email.message}</p> : null}
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="service">Service</label>
          <select
            id="service"
            className="mt-2 h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
            {...register('service')}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service.slug} value={service.title}>{service.title}</option>
            ))}
          </select>
          {errors.service ? <p className="mt-1 text-xs text-red-600">{errors.service.message}</p> : null}
        </div>

        <div>
          <label className="text-sm font-medium" htmlFor="message">Message</label>
          <Textarea id="message" className="mt-2" placeholder="Tell us about your project" {...register('message')} />
          {errors.message ? <p className="mt-1 text-xs text-red-600">{errors.message.message}</p> : null}
        </div>

        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </div>
    </form>
  );
}
