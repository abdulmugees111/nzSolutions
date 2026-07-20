import {Banknote, GraduationCap, Users, Globe} from 'lucide-react';
import {Container} from '@/components/common/Container';
import {ApplyButton} from '@/components/careers/ApplyButton';

const perks = [
  {icon: Banknote,      label: 'Competitive Pay'},
  {icon: GraduationCap, label: 'Career Training'},
  {icon: Users,         label: 'Inclusive Culture'},
  {icon: Globe,         label: 'UK Infrastructure'},
];

export function AboutCareersCta() {
  return (
    <section className="pt-8 pb-14 sm:pt-10 sm:pb-20 lg:pt-12 lg:pb-24 bg-white">
      <Container>
        <div className="rounded-3xl bg-primary p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">

              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-widest text-secondary">We&apos;re Recruiting</p>
                <h2 className="mt-2 text-2xl font-black text-white leading-tight">Ready to join the team?</h2>
                <p className="mt-2 text-sm leading-6 text-primary-foreground/60">
                  Send your CV to{' '}
                  <span className="font-semibold text-white">Careers@nzsolutions.co.uk</span>{' '}
                  and we&apos;ll be in touch.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {perks.map(({icon: Icon, label}) => (
                    <div
                      key={label}
                      className="flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-medium text-primary-foreground/80"
                      style={{background: 'rgba(255,255,255,0.08)'}}
                    >
                      <Icon size={13} className="text-secondary shrink-0" />
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="shrink-0">
                <ApplyButton />
              </div>

            </div>
        </div>
      </Container>
    </section>
  );
}
