'use client';

import {ArrowRight} from 'lucide-react';

export function ApplyButton() {
  return (
    <a
      href="mailto:Careers@nzsolutions.co.uk"
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        window.location.assign('mailto:Careers@nzsolutions.co.uk');
      }}
      className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground transition-all hover:opacity-90 hover:-translate-y-0.5"
    >
      Apply Now <ArrowRight size={15} />
    </a>
  );
}
