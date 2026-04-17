'use client';

import type { FormEvent } from 'react';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { personalInfo } from '@/data/portfolio';

const contactHighlights = [
  'Ответ в удобном темпе без формальностей',
  'Можно прийти с задачей, идеей или референсом',
  'Помогу упаковать мысль в понятный интерфейс',
];

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);
  const emailServiceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const emailTemplateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const emailPublicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    if (!formRef.current) {
      setStatus('error');
      return;
    }

    if (!emailServiceId || !emailTemplateId || !emailPublicKey) {
      console.error('EmailJS env variables are missing');
      setStatus('error');
      return;
    }

    const formData = new FormData(formRef.current);

    try {
      const result = await emailjs.send(
        emailServiceId,
        emailTemplateId,
        {
          from_name: formData.get('name') as string,
          email: formData.get('email') as string,
          message: formData.get('message') as string,
        },
        emailPublicKey
      );

      if (result.status === 200) {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Ошибка отправки:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="section-shell overflow-hidden px-6 py-8 sm:px-8 md:px-10 md:py-10">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-[2rem] bg-slate-950 p-6 text-[#f5efe4] md:p-8">
              <p className="eyebrow border-white/15 bg-white/10 text-slate-200">Contact</p>
              <h2 className="mt-6 text-[2.2rem] font-semibold uppercase tracking-[-0.05em] md:text-[3rem]">
                Давайте сделаем страницу, которую хочется открыть еще раз.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-300">
                Если есть задача по сайту, лендингу или просто хочется привести портфолио в более сильный вид, можно написать прямо здесь.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Email</p>
                  <p className="mt-2 text-lg font-medium">{personalInfo.email}</p>
                </div>
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Локация</p>
                  <p className="mt-2 text-lg font-medium">{personalInfo.location}</p>
                </div>
              </div>

              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {contactHighlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1.5 h-2 w-2 rounded-full bg-primary-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-6 md:p-8">
              <div className="mb-8">
                <p className="eyebrow">Написать сообщение</p>
                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                  Заполните форму, и сообщение уйдет напрямую через EmailJS.
                </p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                    Имя
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="input-field"
                    placeholder="Ваше имя"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="input-field"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="input-field resize-none"
                    placeholder="Опишите задачу, идею или желаемый стиль"
                  />
                </div>

                <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full">
                  {status === 'submitting' ? 'Отправка...' : 'Отправить сообщение'}
                </button>

                {status === 'success' && (
                  <p className="text-center text-green-600">Сообщение успешно отправлено.</p>
                )}

                {status === 'error' && (
                  <p className="text-center text-red-600">
                    Не удалось отправить сообщение. Проверьте настройки EmailJS и попробуйте еще раз.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
