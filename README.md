# Портфолио разработчика

Персональное портфолио (визитная карточка) разработчика на Next.js.

## Стек

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Статический экспорт** для GitHub Pages

## Быстрый старт

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000)

### Сборка для продакшена

```bash
npm run build
```

Собранный сайт находится в папке `dist/`.

### Локальный просмотр собранной версии

```bash
npx serve dist
```

## Настройка

### Редактирование данных

Откройте `src/data/portfolio.ts` и измените:

- `personalInfo` — ваша информация (имя, email, биография)
- `projects` — список проектов
- `skills` — навыки
- `experience` — опыт работы
- `socialLinks` — ссылки на соцсети

### Изображения

Добавьте изображения проектов в папку `public/images/` и обновите пути в `src/data/portfolio.ts`.

## Настройка формы обратной связи (EmailJS)

Форма использует сервис **EmailJS** для отправки писем без сервера.

### Шаг 1: Регистрация на EmailJS

1. Перейдите на [emailjs.com](https://www.emailjs.com)
2. Зарегистрируйтесь (бесплатный тариф доступен)

### Шаг 2: Создание Email Service

1. В личном кабинете нажмите **Add New** → **Email Service**
2. Выберите провайдера (Gmail, Outlook, и т.д.)
3. Подключите ваш аккаунт
4. Скопируйте **Service ID** (например, `service_abc123`)

### Шаг 3: Создание Email Template

1. Перейдите в раздел **Email Templates**
2. Нажмите **Create New Template**
3. В шаблоне используйте переменные:
   - `{{from_name}}` — имя отправителя
   - `{{from_email}}` — email отправителя
   - `{{message}}` — сообщение
4. Сохраните и скопируйте **Template ID** (например, `template_xyz789`)

### Шаг 4: Получение Public Key

1. Перейдите в **Account** → **API Keys**
2. Скопируйте **Public Key**

### Шаг 5: Настройка в проекте

Создайте файл `.env.local` в корне проекта:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=ваш_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=ваш_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=ваш_public_key
```

Обновите `src/components/sections/Contact.tsx`:

```typescript
const result = await emailjs.send(
  process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
  process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
  {
    from_name: formData.get('name') as string,
    from_email: formData.get('email') as string,
    message: formData.get('message') as string,
  },
  process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
);
```

## Деплой на GitHub Pages

### Шаг 1: Создайте репозиторий на GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ВАШ_НИК/ВАШ_РЕПОЗИТОРИЙ.git
git push -u origin main
```

### Шаг 2: Настройте GitHub Pages

1. Перейдите в настройки репозитория (**Settings**)
2. Выберите раздел **Pages** (в левом меню)
3. В разделе **Build and deployment**:
   - **Source**: выберите **GitHub Actions**

### Шаг 3: Проверьте workflow

Workflow уже настроен в `.github/workflows/deploy.yml`. Он автоматически:
- Собирает проект
- Публикует на GitHub Pages при пуше в ветку `main`

### Шаг 4: Запуск деплоя

**Автоматически:** При каждом пуше в ветку `main`

**Вручную:**
1. Перейдите в **Actions** → **Deploy to GitHub Pages**
2. Нажмите **Run workflow**

### Шаг 5: Настройка basePath (если нужно)

Если сайт доступен по адресу `https://username.github.io/repo-name/`, обновите `next.config.mjs`:

```javascript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  basePath: '/repo-name',  // Имя вашего репозитория
  assetPrefix: '/repo-name/',
};
```

После изменения закоммитьте и отправьте изменения:

```bash
git add .
git commit -m "Update basePath for GitHub Pages"
git push
```

## Скрипты

| Команда | Описание |
|---------|----------|
| `npm run dev` | Запуск сервера разработки |
| `npm run build` | Сборка для продакшена |
| `npm run start` | Запуск продакшен сборки (локально) |
| `npm run lint` | Проверка ESLint |
| `npm run format` | Форматирование кода Prettier |

## Структура проекта

```
portfolio/
├── .github/workflows/    # GitHub Actions для деплоя
├── public/               # Статические ресурсы
│   ├── images/          # Изображения проектов
│   └── icons/           # Иконки
├── src/
│   ├── app/             # Страницы (App Router)
│   ├── components/      # React компоненты
│   │   ├── layout/      # Header, Footer
│   │   ├── sections/    # Hero, About, Projects, Contact
│   │   ├── shared/      # Общие компоненты
│   │   └── ui/          # UI компоненты
│   ├── data/            # Статические данные
│   ├── types/           # TypeScript типы
│   ├── hooks/           # Кастомные хуки
│   └── utils/           # Утилиты
├── .env.local           # Переменные окружения (не коммитить!)
├── .env.example         # Пример переменных окружения
├── next.config.mjs      # Конфигурация Next.js
├── tailwind.config.ts   # Конфигурация Tailwind
└── tsconfig.json        # Конфигурация TypeScript
```

## Лицензия

MIT
