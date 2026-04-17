import { Experience, Project, Skill, SocialLink } from '@/types';

export const personalInfo = {
  name: 'Холодов Евгений',
  title: 'Vibecode Developer',
  email: 'kelp9900@mail.ru',
  location: 'Сочи, Россия',
  bio: 'Разрабатываю современные приложения с использованием ИИ. Фокус на скорости разработки и удобстве пользователей. Более 3 лет опыта в создании интерфейсов на React и Next.js.',
};

export const projects: Project[] = [
  {
    id: '1',
    title: 'Codewars',
    description: 'Пройденные мной каты',
    technologies: ['Python'],
    imageUrl: 'images/project-1.jpg',
    githubUrl: 'https://xn--23-6kc3bbqgrrd.xn--p1ai/',
  },
  {
    id: '2',
    title: 'Portfolio',
    description: 'Мое портфолио',
    technologies: ['TypeScript', 'Tailwind CSS', 'NextJS'],
    imageUrl: 'images/project-2.jpg',
    githubUrl: 'https://xn--23-6kc3bbqgrrd.xn--p1ai/',
  },
];

export const skills: Skill[] = [
  { name: 'Python', level: 'intermediate' },
  { name: 'React / Next.js', level: 'advanced' },
  { name: 'TypeScript', level: 'intermediate' },
  { name: 'Tailwind CSS', level: 'advanced' },
  { name: 'Node.js', level: 'intermediate' },
  { name: 'Git', level: 'beginner' },
  { name: 'HTML/CSS', level: 'advanced' },
];

export const experience: Experience[] = [
  {
    id: '1',
    company: 'Tech Company',
    position: 'Frontend Developer',
    period: '2023 — н.в.',
    description: [
      'Разработка архитектуры frontend-приложений',
      'Оптимизация производительности существующих проектов',
    ],
  },
  {
    id: '2',
    company: 'College',
    position: 'LOX',
    period: '2022 — 2026',
    description: [
      'Создание лендингов и корпоративных сайтов',
      'Верстка адаптивных интерфейсов',
      'Интеграция с backend API',
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { platform: 'GitHub', url: 'https://github.com/cake9900', icon: 'github' },
  { platform: 'ВКонтакте', url: 'https://vk.com/00', icon: 'vk' },
];
