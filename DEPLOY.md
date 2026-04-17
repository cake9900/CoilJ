# Инструкция по деплою на GitHub Pages

## Шаг 1: Создание репозитория

1. Создайте новый репозиторий на GitHub (например, `portfolio`)
2. Инициализируйте Git в проекте:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ВАШ_НИК/ВАШ_РЕПОЗИТОРИЙ.git
git push -u origin main
```

## Шаг 2: Настройка GitHub Pages

1. Откройте ваш репозиторий на GitHub
2. Перейдите в **Settings** (Настройки)
3. В левом меню выберите **Pages**
4. В разделе **Build and deployment**:
   - **Source**: выберите **GitHub Actions**

## Шаг 3: Настройка переменных окружения (для EmailJS)

Если используете форму обратной связи:

1. В репозитории перейдите в **Settings** → **Secrets and variables** → **Actions**
2. Нажмите **New repository secret**
3. Добавьте три секрета:
   - `NEXT_PUBLIC_EMAILJS_SERVICE_ID` — ваш Service ID
   - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` — ваш Template ID
   - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` — ваш Public Key

## Шаг 4: Обновление basePath (если нужно)

Если сайт будет доступен по адресу `https://username.github.io/repo-name/`:

1. Откройте `next.config.mjs`
2. Укажите имя репозитория:

```javascript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  basePath: '/portfolio',  // Имя вашего репозитория
  assetPrefix: '/portfolio/',
};

export default nextConfig;
```

3. Закоммитьте изменения:

```bash
git add .
git commit -m "Update basePath for GitHub Pages"
git push
```

## Шаг 5: Запуск деплоя

### Автоматический деплой

После пуша в ветку `main` workflow запустится автоматически.

### Ручной запуск

1. Перейдите в **Actions** → **Deploy to GitHub Pages**
2. Нажмите **Run workflow**
3. Выберите ветку `main`
4. Нажмите **Run workflow**

## Шаг 6: Проверка

1. Дождитесь завершения workflow (зелёная галочка)
2. В **Actions** → **Deploy to GitHub Pages** нажмите на последний запуск
3. Справа будет ссылка на ваш сайт

## URL сайта

Ваш сайт будет доступен по адресу:
```
https://ВАШ_НИК.github.io/ВАШ_РЕПОЗИТОРИЙ/
```

## Обновление сайта

После каждого пуша в ветку `main` сайт будет автоматически обновляться:

```bash
# Внесите изменения
git add .
git commit -m "Описание изменений"
git push
```

## Troubleshooting

### Ошибка 404

- Проверьте, что workflow завершился успешно
- Убедитесь, что `basePath` соответствует имени репозитория
- Проверьте, что папка `dist` создаётся при сборке

### Форма не работает

- Проверьте переменные окружения в GitHub Actions
- Убедитесь, что ключи EmailJS правильные
- Проверьте консоль браузера на ошибки

### Изображения не отображаются

- Проверьте пути к изображениям (должны начинаться с `/`)
- Убедитесь, что файлы находятся в папке `public/`
