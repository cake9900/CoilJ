import Image from 'next/image';
import { projects } from '@/data/portfolio';

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <div className="section-shell px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <div className="section-intro">
            <div>
              <p className="eyebrow">Selected Work</p>
              <h2 className="heading-2 mt-4">Проекты, в которых дизайн и код работают вместе.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Оставил только короткие карточки, но визуально сделал их более «редакционными»: крупная типографика, атмосферный кадр и понятные технологии.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {projects.map((project, index) => (
              <a
                key={project.id}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative overflow-hidden rounded-[2rem] border border-slate-950/10 bg-[#fffdf8] ${
                  index === 0 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`grid gap-0 ${index === 0 ? 'lg:grid-cols-[1.1fr_0.9fr]' : ''}`}>
                  <div className="relative min-h-[280px] overflow-hidden bg-slate-200">
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(15,23,42,0.55))]" />
                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-xs uppercase tracking-[0.2em] text-white backdrop-blur">
                        Case {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between p-6 md:p-8">
                    <div>
                      <h3 className="text-[2rem] font-semibold tracking-[-0.04em] text-slate-950 md:text-[2.2rem]">
                        {project.title}
                      </h3>
                      <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-8">
                      <div className="mb-5 flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-slate-950/10 bg-white px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-600"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="inline-flex items-center gap-3 text-sm font-medium uppercase tracking-[0.2em] text-slate-950">
                        Открыть проект
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-950/10 transition group-hover:translate-x-1 group-hover:bg-slate-950 group-hover:text-[#f5efe4]">
                          →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
