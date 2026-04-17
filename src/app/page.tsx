import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.18),_transparent_60%)]" />
      <div className="pointer-events-none absolute right-[-12rem] top-[26rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,_rgba(251,146,60,0.18),_transparent_68%)] blur-3xl" />
      <div className="pointer-events-none absolute left-[-10rem] top-[72rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,_rgba(45,212,191,0.18),_transparent_70%)] blur-3xl" />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
