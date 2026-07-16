'use client';

import {ArrowRight} from 'lucide-react';

const GMAIL_URL = 'https://mail.google.com/mail/?view=cm&to=Careers@nzsolutions.co.uk&su=Job+Application';

export function ApplyButton() {
  return (
    <a
      href={GMAIL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5"
    >
      Apply Now <ArrowRight size={15} />
    </a>
  );
}
