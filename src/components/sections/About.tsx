import { experience, skills } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <div className="section-shell px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <div className="section-intro">
            <div>
              <p className="eyebrow">About & Expertise</p>
              <h2 className="heading-2 mt-4 max-w-3xl">Собираю интерфейсы, в которых форма поддерживает смысл.</h2>
            </div>
            <p className="max-w-xl text-base leading-7 text-slate-600 md:text-lg">
              Работаю на стыке визуального дизайна, удобства и инженерной аккуратности. Ниже собрал стек и опыт, которые помогают доводить идею до готового продукта.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.5fr_1.05fr]">
            <div className="space-y-6">
              <div className="card p-6">
                <h3 className="heading-3 mb-6">Навыки</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  {skills.map((skill) => (
                    <div key={skill.name} className="rounded-[1.5rem] border border-slate-950/10 bg-[#fffdf8] p-4">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-lg font-semibold tracking-[-0.03em] text-slate-950">
                          {skill.name}
                        </p>
                        <span className="rounded-full bg-primary-100 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-primary-700">
                          {getLevelText(skill.level)}
                        </span>
                      </div>
                      <div className="mt-4 h-2 rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-[linear-gradient(90deg,#0f172a,_#0ea5e9)]"
                          style={{ width: getLevelWidth(skill.level) }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-slate-950/10 bg-slate-950 p-6 text-[#f5efe4]">
                <p className="text-sm uppercase tracking-[0.2em] text-slate-300">Подход</p>
                <p className="mt-4 text-2xl font-semibold tracking-[-0.05em]">
                  Делаю не просто аккуратно, а с ощущением продукта.
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  Важны визуальная система, читаемая структура, адаптивность и живой ритм страницы. Когда интерфейс выглядит собранно, продукт воспринимается сильнее.
                </p>
              </div>
            </div>

            <div className="card p-6 md:p-8">
              <h3 className="heading-3 mb-8">Опыт</h3>
              <div className="space-y-6">
                {experience.map((item) => (
                  <div
                    key={item.id}
                    className="relative overflow-hidden rounded-[1.75rem] border border-slate-950/10 bg-[#fffdf8] p-5"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,#0f172a,_#0ea5e9)]" />
                    <div className="pl-4">
                      <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                        <div>
                          <h4 className="text-xl font-semibold tracking-[-0.04em] text-slate-950">
                            {item.position}
                          </h4>
                          <p className="text-sm uppercase tracking-[0.18em] text-primary-700">
                            {item.company}
                          </p>
                        </div>
                        <p className="text-sm text-slate-500">{item.period}</p>
                      </div>

                      <ul className="mt-4 space-y-2 text-slate-600">
                        {item.description.map((point, index) => (
                          <li key={index} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 rounded-full bg-primary-600" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function getLevelText(level: string): string {
  const levels: Record<string, string> = {
    beginner: 'Начинающий',
    intermediate: 'Уверенный',
    advanced: 'Продвинутый',
    expert: 'Эксперт',
  };

  return levels[level] || level;
}

function getLevelWidth(level: string): string {
  const widths: Record<string, string> = {
    beginner: '30%',
    intermediate: '58%',
    advanced: '80%',
    expert: '100%',
  };

  return widths[level] || '50%';
}
