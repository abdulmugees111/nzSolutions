'use client';

import {useState} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {CheckCircle2, Calendar} from 'lucide-react';
import {contactFormSchema, type ContactFormValues} from '@/lib/validations';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Textarea} from '@/components/ui/textarea';

const SERVICE_OPTIONS = [
  'Web Development',
  'Mobile App',
  'AI Solutions',
  'Cloud Services',
  'IT Consulting',
  'Digital Marketing',
  'Other',
];

const BUDGET_OPTIONS = [
  'Under £5,000',
  '£5,000 – £15,000',
  '£15,000 – £50,000',
  '£50,000 – £100,000',
  '£100,000+',
  'Not sure yet',
];

const PERKS = ['Free Consultation', 'Quick Response', 'No Obligation'];

// ── Replace these with your real booking URLs ──────────────────────────────
const CALENDLY_URL = 'https://calendly.com/nzsolutions';
const GOOGLE_CALENDAR_URL = 'https://calendar.google.com/calendar/appointments/schedules/YOUR_SCHEDULE_ID';
// ──────────────────────────────────────────────────────────────────────────

type BookingPlatform = 'calendly' | 'google';

export function ContactForm() {
  const [bookingPlatform, setBookingPlatform] = useState<BookingPlatform | null>(null);

  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {name: '', email: '', phone: '', company: '', service: '', budget: '', message: ''},
  });

  function onSubmit(values: ContactFormValues) {
    console.log('Contact form values:', values);
    reset();
  }

  function handleBookNow() {
    if (bookingPlatform === 'calendly') window.open(CALENDLY_URL, '_blank', 'noopener,noreferrer');
    else if (bookingPlatform === 'google') window.open(GOOGLE_CALENDAR_URL, '_blank', 'noopener,noreferrer');
  }

  return (
    <div className="overflow-hidden rounded-3xl border bg-card shadow-sm">
      {/* Header strip */}
      <div className="bg-primary px-6 py-6 sm:px-8">
        <h2 className="text-2xl font-bold text-primary-foreground">Let&apos;s Talk</h2>
        <ul className="mt-3 flex flex-col gap-1.5 sm:flex-row sm:gap-5">
          {PERKS.map((perk) => (
            <li key={perk} className="flex items-center gap-1.5 text-sm text-primary-foreground/80">
              <CheckCircle2 size={15} className="shrink-0 text-primary-foreground" />
              {perk}
            </li>
          ))}
        </ul>
      </div>

      {/* Form body */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-6 py-6 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label className="text-sm font-medium" htmlFor="name">Name <span className="text-red-500">*</span></label>
            <Input id="name" className="mt-1.5" placeholder="John Smith" {...register('name')} />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="text-sm font-medium" htmlFor="email">Email <span className="text-red-500">*</span></label>
            <Input id="email" type="email" className="mt-1.5" placeholder="you@company.com" {...register('email')} />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium" htmlFor="phone">Phone</label>
            <Input id="phone" type="tel" className="mt-1.5" placeholder="+44 7700 000000" {...register('phone')} />
          </div>

          {/* Company */}
          <div>
            <label className="text-sm font-medium" htmlFor="company">Company</label>
            <Input id="company" className="mt-1.5" placeholder="Your company name" {...register('company')} />
          </div>

          {/* Service Needed */}
          <div>
            <label className="text-sm font-medium" htmlFor="service">Service Needed <span className="text-red-500">*</span></label>
            <select
              id="service"
              className="mt-1.5 h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...register('service')}
            >
              <option value="">Select a service…</option>
              {SERVICE_OPTIONS.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
            {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
          </div>

          {/* Project Budget */}
          <div>
            <label className="text-sm font-medium" htmlFor="budget">Project Budget</label>
            <select
              id="budget"
              className="mt-1.5 h-11 w-full rounded-lg border bg-background px-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              {...register('budget')}
            >
              <option value="">Select a budget…</option>
              {BUDGET_OPTIONS.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="text-sm font-medium" htmlFor="message">Message <span className="text-red-500">*</span></label>
          <Textarea id="message" className="mt-1.5" rows={4} placeholder="Tell us about your project…" {...register('message')} />
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <div className="mt-6">
          <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-auto">
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </Button>
        </div>
      </form>

      {/* ── Book a Call divider ──────────────────────────────────── */}
      <div className="border-t px-6 py-6 sm:px-8">
        <div className="flex items-center gap-2 mb-4">
          <Calendar size={17} className="text-primary" />
          <p className="text-sm font-semibold text-foreground">Prefer to book a call directly?</p>
        </div>

        <p className="mb-4 text-xs text-muted-foreground">Choose your preferred calendar platform:</p>

        {/* Platform selector */}
        <div className="grid grid-cols-2 gap-3">
          {/* Calendly option */}
          <button
            type="button"
            onClick={() => setBookingPlatform('calendly')}
            className={`flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-sm font-medium transition focus:outline-none ${
              bookingPlatform === 'calendly'
                ? 'border-primary bg-primary/5 text-primary'
                : 'border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground'
            }`}
          >
            {/* Calendly logo mark */}
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <circle cx="20" cy="20" r="20" fill="#006BFF"/>
              <path d="M27.5 14.5C25.7 12.3 23.1 11 20 11C14.5 11 10 15.5 10 21C10 26.5 14.5 31 20 31C23.1 31 25.7 29.7 27.5 27.5" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M16 21H24M20 17V25" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
            Calendly
            {bookingPlatform === 'calendly' && (
              <span className="text-xs font-normal text-primary">Selected ✓</span>
            )}
          </button>

          {/* Google Calendar option */}
          <button
            type="button"
            onClick={() => setBookingPlatform('google')}
            className={`flex flex-col items-center gap-2 rounded-2xl border-2 p-4 text-sm font-medium transition focus:outline-none ${
              bookingPlatform === 'google'
                ? 'border-primary bg-primary/5 text-primary'
                : 'border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-foreground'
            }`}
          >
            {/* Google Calendar logo mark */}
            <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect width="40" height="40" rx="8" fill="white" stroke="#e0e0e0" strokeWidth="1"/>
              <rect x="8" y="14" width="24" height="18" rx="2" fill="white" stroke="#4285F4" strokeWidth="1.5"/>
              <rect x="8" y="14" width="24" height="6" rx="2" fill="#4285F4"/>
              <line x1="14" y1="8" x2="14" y2="16" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
              <line x1="26" y1="8" x2="26" y2="16" stroke="#4285F4" strokeWidth="2" strokeLinecap="round"/>
              <text x="20" y="27" textAnchor="middle" fontSize="9" fontWeight="700" fill="#EA4335" fontFamily="system-ui">
                {new Date().getDate()}
              </text>
            </svg>
            Google Calendar
            {bookingPlatform === 'google' && (
              <span className="text-xs font-normal text-primary">Selected ✓</span>
            )}
          </button>
        </div>

        {/* Book Now button — appears after selection */}
        {bookingPlatform && (
          <button
            type="button"
            onClick={handleBookNow}
            className="mt-4 w-full rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-primary/90 active:scale-[0.98]"
          >
            Book Now via {bookingPlatform === 'calendly' ? 'Calendly' : 'Google Calendar'} →
          </button>
        )}
      </div>
    </div>
  );
}
