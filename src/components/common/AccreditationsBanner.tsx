import {Container} from '@/components/common/Container';

export function AccreditationsBanner() {
  return (
    <section className="border-t bg-card py-14 sm:py-20 lg:py-24">
      <Container>

        <p className="mb-10 text-center text-sm font-black uppercase tracking-[0.25em] text-foreground">
          Accreditations &amp; Memberships
        </p>

        <div className="flex flex-wrap items-center justify-center gap-16 lg:gap-28">

          {/* ── PQS card ──────────────────────────────────────── */}
          <div
            className="overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{border: '3px solid #4caf1a', width: '340px'}}
          >
            <div className="flex items-center justify-between bg-white px-8 py-8">
              {/* PQS giant letters */}
              <div>
                <div className="flex items-end gap-0 leading-none">
                  <span className="text-[4.5rem] font-black leading-none tracking-tight text-gray-900">P</span>
                  <span className="text-[4.5rem] font-black leading-none tracking-tight text-gray-900">Q</span>
                  <span className="relative inline-block">
                    <span className="text-[4.5rem] font-black leading-none tracking-tight" style={{color: '#4caf1a'}}>S</span>
                    <svg
                      className="absolute"
                      style={{width: '28px', height: '28px', right: '-14px', top: '4px'}}
                      viewBox="0 0 28 28" fill="none" aria-hidden="true"
                    >
                      <path d="M4 14l7 7L24 6" stroke="#4caf1a" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.2em] text-gray-400">Pre·Qualification·Scheme</p>
              </div>

              <div className="mx-4 self-stretch w-px bg-gray-200" />

              {/* SSIP */}
              <div className="flex flex-col items-center gap-2">
                <span className="text-[2.2rem] font-black leading-none tracking-tight text-gray-900">
                  SS<span style={{color: '#0098d4'}}>I</span>P
                </span>
                <span className="rounded bg-gray-100 px-3 py-1 text-[9px] font-black uppercase tracking-widest text-gray-500">
                  Registered Member
                </span>
              </div>
            </div>

            {/* Green footer */}
            <div className="flex items-center justify-center gap-3 py-4" style={{background: '#4caf1a'}}>
              <svg className="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2.2"/>
                <path d="M8 12l3 3 5-5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span className="text-base font-black text-white">Health &amp; Safety Approved</span>
            </div>
          </div>

          {/* ── SSIP rubber stamp ─────────────────────────────── */}
          <div
            className="relative flex shrink-0 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{width: '230px', height: '230px', border: '3.5px solid #1c1c1c'}}
          >
            <svg viewBox="0 0 230 230" className="absolute inset-0 size-full" aria-hidden="true">
              {Array.from({length: 52}).map((_, i) => {
                const angle = (i * 360) / 52;
                const rad = (angle * Math.PI) / 180;
                const x1 = 115 + 108 * Math.cos(rad);
                const y1 = 115 + 108 * Math.sin(rad);
                const x2 = 115 + 96 * Math.cos(rad);
                const y2 = 115 + 96 * Math.sin(rad);
                return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#1c1c1c" strokeWidth="3"/>;
              })}
              <defs>
                <path id="s-top" d="M 30,115 A 85,85 0 0,1 200,115" />
                <path id="s-bot" d="M 32,125 A 85,85 0 0,0 198,125" />
              </defs>
              <text fontSize="10.5" fontWeight="800" fill="#1c1c1c" letterSpacing="0.8">
                <textPath href="#s-top" startOffset="5%">Assessed by a SSIP member scheme</textPath>
              </text>
              <text fontSize="9.5" fill="#555" letterSpacing="0.3">
                <textPath href="#s-bot" startOffset="0%">For validation please see www.ssipportal.org.uk</textPath>
              </text>
            </svg>

            <div className="relative z-10 flex flex-col items-center">
              <span className="text-[3rem] font-black leading-none tracking-tight text-gray-900">
                SS
                <span
                  className="inline-block border-b-[4px] px-[2px] leading-none"
                  style={{color: '#0098d4', borderColor: '#0098d4'}}
                >I</span>
                P
              </span>
              <svg className="mt-1.5 w-11" viewBox="0 0 44 24" fill="none" aria-hidden="true">
                <rect x="2" y="0" width="40" height="17" rx="2" fill="#0098d4"/>
                <path d="M2 17l20 7 20-7" fill="#0098d4"/>
              </svg>
            </div>
          </div>

          {/* ── Constructionline ──────────────────────────────── */}
          <div className="flex flex-col items-center gap-5 transition-all duration-300 hover:-translate-y-2">
            <div
              className="flex items-center justify-center rounded-full"
              style={{width: '130px', height: '130px', background: '#d1d5db'}}
            >
              <svg viewBox="0 0 60 56" className="w-[80px]" aria-hidden="true" fill="#6b7280">
                <rect x="2"  y="50" width="56" height="5"  rx="2.5"/>
                <rect x="2"  y="6"  width="56" height="6"  rx="2.5"/>
                <rect x="5"  y="14" width="50" height="3"  rx="1.5"/>
                <rect x="5"  y="43" width="50" height="3"  rx="1.5"/>
                <rect x="7"  y="17" width="11" height="26" rx="3"/>
                <rect x="24.5" y="17" width="11" height="26" rx="3"/>
                <rect x="42" y="17" width="11" height="26" rx="3"/>
              </svg>
            </div>
            <div className="text-center">
              <p className="text-[1.5rem] font-bold tracking-tight text-gray-600">Constructionline</p>
              <p className="mt-1 text-[11px] font-black uppercase tracking-[0.2em] text-gray-400">Silver Member</p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
