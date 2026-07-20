'use client';

import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {CheckCircle2, Inbox, Clock, Zap, User, Mail, Phone, Building2, Briefcase, Wallet, MessageSquare, ChevronDown} from 'lucide-react';
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

const NEXT_STEPS = [
  { icon: Inbox,  label: 'Received',  desc: 'Goes straight to our team', color: 'bg-blue-50 text-blue-600' },
  { icon: Clock,  label: 'Reviewed',  desc: 'Within 1 business day',      color: 'bg-amber-50 text-amber-600' },
  { icon: Zap,    label: 'We respond', desc: 'Within 2–3 business days',   color: 'bg-green-50 text-green-600' },
];

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: {errors, isSubmitting},
    reset,
    watch,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {name: '', email: '', phone: '', company: '', service: '', budget: '', message: ''},
  });

  const watchedService = watch('service');
  const watchedBudget = watch('budget');

  async function onSubmit(values: ContactFormValues) {
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (data.success) {
        alert('Message sent successfully!');
        reset();
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch {
      alert('Something went wrong. Please try again.');
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-md">
      {/* Header strip */}
      <div className="bg-primary px-6 py-4 sm:px-8 sm:py-5">
        <h2 className="text-xl font-bold text-primary-foreground sm:text-2xl">Let&apos;s Talk</h2>
        <ul className="mt-2 flex flex-wrap gap-x-5 gap-y-1.5">
          {PERKS.map((perk) => (
            <li key={perk} className="flex items-center gap-1.5 text-sm text-primary-foreground/80">
              <CheckCircle2 size={14} className="shrink-0 text-primary-foreground" />
              {perk}
            </li>
          ))}
        </ul>
      </div>

      {/* Form body */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-6 pt-5 pb-6 sm:px-8 sm:pt-6 sm:pb-7">
        <div className="grid gap-3.5 md:grid-cols-2">
          {/* Name */}
          <div>
            <div className="relative">
              <User size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="name" className="pl-9 bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 [&:not(:placeholder-shown)]:border-primary/60 [&:not(:placeholder-shown)]:bg-primary/5" placeholder="Full Name *" {...register('name')} />
            </div>
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div>
            <div className="relative">
              <Mail size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="email" type="email" className="pl-9 bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 [&:not(:placeholder-shown)]:border-primary/60 [&:not(:placeholder-shown)]:bg-primary/5" placeholder="Email Address *" {...register('email')} />
            </div>
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email.message}</p>}
          </div>

          {/* Phone */}
          <div>
            <div className="relative">
              <Phone size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="phone" type="tel" className="pl-9 bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 [&:not(:placeholder-shown)]:border-primary/60 [&:not(:placeholder-shown)]:bg-primary/5" placeholder="Phone Number" {...register('phone')} />
            </div>
          </div>

          {/* Company */}
          <div>
            <div className="relative">
              <Building2 size={15} className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <Input id="company" className="pl-9 bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 [&:not(:placeholder-shown)]:border-primary/60 [&:not(:placeholder-shown)]:bg-primary/5" placeholder="Company Name" {...register('company')} />
            </div>
          </div>

          {/* Service Needed */}
          <div>
            {/* <div className="relative">
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
            </div> */}
            <div className="relative">
  <Briefcase
    size={15}
    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
  />

  <select
    id="service"
    className={`h-11 w-full appearance-none rounded-lg border border-input pl-10 pr-9 text-sm text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors leading-[2.75rem] py-0 ${watchedService ? '!bg-primary/5 border-primary/60' : '!bg-white'}`}
    {...register('service')}
  >
    <option value="">Service Needed *</option>

    {SERVICE_OPTIONS.map((service) => (
      <option key={service} value={service}>
        {service}
      </option>
    ))}
  </select>

  <ChevronDown
    size={15}
    className="
      pointer-events-none absolute right-2 top-1/2
      -translate-y-1/2 text-muted-foreground
    "
  />
</div>
            {errors.service && <p className="mt-1 text-xs text-red-600">{errors.service.message}</p>}
          </div>

          {/* Project Budget */}
          <div>
        <div className="relative">
  <Wallet
    size={15}
    className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
  />

  <select
    id="budget"
    className={`h-11 w-full appearance-none rounded-lg border border-input pl-10 pr-9 text-sm text-muted-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors leading-[2.75rem] py-0 ${watchedBudget ? '!bg-primary/5 border-primary/60' : '!bg-white'}`}
    {...register('budget')}
  >
    <option value="">Project Budget</option>

    {BUDGET_OPTIONS.map((budget) => (
      <option key={budget} value={budget}>
        {budget}
      </option>
    ))}
  </select>

  <ChevronDown
    size={15}
    className="
      pointer-events-none absolute right-2 top-1/2
      -translate-y-1/2 text-muted-foreground
    "
  />
</div>
          </div>
        </div>

        {/* Message */}
        <div className="mt-3.5">
          <div className="relative">
            <MessageSquare size={15} className="pointer-events-none absolute left-3 top-[11px] text-muted-foreground" />
            <Textarea id="message" className="pl-9 pt-2 bg-white transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20 [&:not(:placeholder-shown)]:border-primary/60 [&:not(:placeholder-shown)]:bg-primary/5" rows={3} placeholder="Your Message *" {...register('message')} />
          </div>
          {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message.message}</p>}
        </div>

        {/* Submit */}
        <div className="mt-5">
          <Button type="submit" disabled={isSubmitting} size="lg" className="w-full">
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </Button>
        </div>
      </form>

      {/* ── What Happens Next ──────────────────────────────────── */}
      <div className="border-t px-6 py-5 sm:px-8">
        <p className="mb-3 text-sm font-semibold text-foreground">What happens next?</p>
        <div className="grid grid-cols-3 gap-2.5">
          {NEXT_STEPS.map(({ icon: Icon, label, desc, color }) => (
            <div
              key={label}
              className="group flex flex-col items-center gap-2.5 rounded-xl border border-border bg-background p-3 text-center transition-all duration-200 cursor-default hover:-translate-y-0.5 hover:shadow-md hover:border-primary/20"
            >
              <div className={`flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-110 ${color}`}>
                <Icon size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{label}</p>
                <p className="mt-0.5 text-xs leading-4 text-muted-foreground">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
