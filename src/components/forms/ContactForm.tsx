'use client';

import {useState} from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {CheckCircle2, Calendar, User, Mail, Phone, Building2, Briefcase, Wallet, MessageSquare} from 'lucide-react';
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
      <div className="bg-primary px-5 py-3.5 sm:px-6 sm:py-4 lg:px-8">
        <h2 className="text-xl font-bold text-primary-foreground sm:text-2xl">Let&apos;s Talk</h2>
        <ul className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1.5">
          {PERKS.map((perk) => (
            <li key={perk} className="flex items-center gap-1.5 text-sm text-primary-foreground/80">
              <CheckCircle2 size={14} className="shrink-0 text-primary-foreground" />
              {perk}
            </li>
          ))}
        </ul>
      </div>

      {/* Form body */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-5 pt-4 pb-5 sm:px-6 sm:pt-4 sm:pb-6 lg:px-8 lg:pb-7">
        <div className="grid gap-4 md:grid-cols-2">
          {/* Name */}
          <div>
            <div className="relative">
              <User size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="name" className="pl-8" placeholder="Full Name *" {...register('name')} />
            </div>
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <Mail size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" type="email" className="pl-8" placeholder="Email Address *" {...register('email')} />
            </div>
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <div className="relative">
              <Phone size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="phone" type="tel" className="pl-8" placeholder="Phone Number" {...register('phone')} />
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="relative">
              <Building2 size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="company" className="pl-8" placeholder="Company Name" {...register('company')} />
            </div>
          </div>

          {/* Service Needed */}
          <div>
            <div className="relative">
              <Briefcase size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <select
                id="service"
                className="h-11 w-full rounded-lg border bg-background pl-9 pr-3 text-sm text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...register('service')}
              >
                <option value="">Service Needed *</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>
            {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
          </div>

          {/* Project Budget */}
          <div>
            <div className="relative">
              <Wallet size={15} className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <select
                id="budget"
                className="h-11 w-full rounded-lg border bg-background pl-9 pr-3 text-sm text-muted-foreground outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...register('budget')}
              >
                <option value="">Project Budget</option>
                {BUDGET_OPTIONS.map((b) => (
                  <option key={b} value={b}>{b}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Message */}
        <div className="mt-4">
          <div className="relative">
            <MessageSquare size={15} className="pointer-events-none absolute left-2.5 top-2.5 text-muted-foreground" />
            <Textarea id="message" className="pl-8" rows={4} placeholder="Your Message *" {...register('message')} />
          </div>
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <div className="mt-6 pb-4">
          <Button type="submit" disabled={isSubmitting} size="lg" className="w-full sm:w-1/2">
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </Button>
        </div>
      </form>

      {/* ── Book a Call divider ──────────────────────────────────── */}
      <div className="border-t px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
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
