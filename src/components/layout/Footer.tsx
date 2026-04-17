import { personalInfo, socialLinks } from '@/data/portfolio';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-4">
      <div className="container-custom">
        <div className="section-shell px-6 py-8 sm:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="space-y-3">
              <p className="eyebrow">Digital Portfolio</p>
              <div>
                <p className="text-2xl font-semibold tracking-[-0.05em] text-slate-950">
                  {personalInfo.name}
                </p>
                <p className="muted max-w-xl">
                  Интерфейсы, которые выглядят уверенно и работают быстро.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-950/10 bg-white/75 text-slate-600 hover:-translate-y-0.5 hover:border-slate-950 hover:text-slate-950"
                  aria-label={link.platform}
                >
                  <span className="sr-only">{link.platform}</span>
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-2 border-t border-slate-950/10 pt-5 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
            <p>&copy; {currentYear} {personalInfo.name}. Все права защищены.</p>
            <p>{personalInfo.location}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    github: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-6.27 0-1.38.48-2.535 1.26-3.435-.255-.375-.54-1.215.12-2.535 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.32.375 2.16.12 2.535.78.9 1.26 2.055 1.26 3.435 0 4.95-2.805 5.97-5.475 6.27.435.375.825 1.11.825 2.235 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
    vk: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M15.073 2H8.937C5.004 2 2 5.009 2 8.937v6.125C2 18.991 5.004 22 8.937 22h6.136C18.996 22 22 18.991 22 15.062V8.937C22 5.009 18.996 2 15.073 2zM17.89 16.22c-1.066.866-2.295.725-2.295.725s-2.02.056-3.803-1.727c-1.92-1.92-2.996-4.05-2.996-4.05s-.31-.866.31-1.245c.558-.341 1.307-.341 1.307-.341h2.513s.372.056.65.248c.248.186.31.558.31.558s.558 2.606 2.606 3.102c1.55.372 1.92-.62 1.92-.62s.186-.866.866-1.176c.682-.31 1.488-.186 1.488-.186s4.466-.056 4.652.248c.186.31-.434 2.482-2.16 4.154-.866.866-1.92 1.3-1.92 1.3s-2.295.772-3.416-.248c-1.114-1.02-2.17-2.606-2.17-2.606s-.31-.434-.62-.496c-.31-.056-.434.124-.434.124s.248 1.488 1.176 2.295c.927.807 1.92.866 1.92.866s1.92.124 3.226-.927c1.302-1.052 1.612-2.295 1.612-2.295s.124-.434-.31-.62c-.434-.186-.99-.056-.99-.056z" />
      </svg>
    ),
  };

  return icons[name] || null;
}
