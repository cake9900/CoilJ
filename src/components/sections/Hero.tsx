import { personalInfo, socialLinks } from '@/data/portfolio';

const metrics = [
  { value: '3+', label: 'года практики' },
  { value: '12', label: 'проектов и концептов' },
  { value: '24/7', label: 'фокус на UX и скорости' },
];

export function Hero() {
  return (
    <section className="section-padding relative pt-36 md:pt-40">
      <div className="container-custom">
        <div className="section-shell glow-card grid gap-10 overflow-hidden px-6 py-8 sm:px-8 md:grid-cols-[1.25fr_0.75fr] md:px-10 md:py-10">
          <div className="grid-overlay absolute inset-y-0 right-0 hidden w-[38%] opacity-25 md:block" />
          <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.16),_transparent_68%)]" />

          <div className="relative z-10 flex flex-col justify-between">
            <div>
              <p className="eyebrow mb-6">Independent Frontend Engineer</p>
              <h1 className="heading-1 max-w-4xl">
                Дизайн с характером. Frontend без компромиссов по скорости.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
                {personalInfo.bio}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="btn-primary">
                  Смотреть кейсы
                </a>
                <a href="#contact" className="btn-secondary">
                  Написать мне
                </a>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full border border-slate-950/10 bg-white/75 px-4 py-3 text-sm font-medium text-slate-700 hover:-translate-y-0.5 hover:border-slate-950 hover:text-slate-950"
                >
                  <SocialIcon name={link.icon} />
                  <span>{link.platform}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex flex-col gap-4">
            <div className="float-card rounded-[2rem] border border-slate-950/10 bg-slate-950 p-6 text-[#f5efe4] shadow-[0_26px_60px_rgba(15,23,42,0.22)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-300">
                    Сейчас в работе
                  </p>
                  <h2 className="mt-3 text-[1.8rem] font-semibold tracking-[-0.04em] md:text-[2.2rem]">
                    Интерфейсы для продуктов, которым нужен вау-эффект.
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-emerald-300">
                  Open
                </span>
              </div>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                    Профиль
                  </p>
                  <p className="mt-2 text-lg font-medium md:text-xl">{personalInfo.name}</p>
                  <p className="mt-1 text-sm text-slate-300">{personalInfo.title}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.18em] text-slate-400">
                    Локация
                  </p>
                  <p className="mt-2 text-lg font-medium md:text-xl">{personalInfo.location}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-1">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`rounded-[1.75rem] border border-slate-950/10 bg-white/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.07)] ${
                    index === 1 ? 'md:ml-10' : ''
                  } ${index === 2 ? 'md:mr-12' : ''}`}
                >
                  <p className="text-[1.8rem] font-bold tracking-[-0.05em] text-slate-950 md:text-[2rem]">
                    {metric.value}
                  </p>
                  <p className="mt-2 text-sm uppercase tracking-[0.18em] text-slate-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    github: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.27 0-1.38.48-2.535 1.26-3.435-.255-.375-.54-1.215.12-2.535 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.32.375 2.16.12 2.535.78.9 1.26 2.055 1.26 3.435 0 4.95-2.805 5.97-5.475 6.27.435.375.825 1.11.825 2.235 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    vk: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.073 2H8.937C5.004 2 2 5.009 2 8.937v6.125C2 18.991 5.004 22 8.937 22h6.136C18.996 22 22 18.991 22 15.062V8.937C22 5.009 18.996 2 15.073 2zM17.89 16.22c-1.066.866-2.295.725-2.295.725s-2.02.056-3.803-1.727c-1.92-1.92-2.996-4.05-2.996-4.05s-.31-.866.31-1.245c.558-.341 1.307-.341 1.307-.341h2.513s.372.056.65.248c.248.186.31.558.31.558s.558 2.606 2.606 3.102c1.55.372 1.92-.62 1.92-.62s.186-.866.866-1.176c.682-.31 1.488-.186 1.488-.186s4.466-.056 4.652.248c.186.31-.434 2.482-2.16 4.154-.866.866-1.92 1.3-1.92 1.3s-2.295.772-3.416-.248c-1.114-1.02-2.17-2.606-2.17-2.606s-.31-.434-.62-.496c-.31-.056-.434.124-.434.124s.248 1.488 1.176 2.295c.927.807 1.92.866 1.92.866s1.92.124 3.226-.927c1.302-1.052 1.612-2.295 1.612-2.295s.124-.434-.31-.62c-.434-.186-.99-.056-.99-.056z" />
      </svg>
    ),
  };

  return icons[name] || null;
}
