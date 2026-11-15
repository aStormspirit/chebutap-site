# AGENTS.md

Сайт FoodFi — статическая страница без сборки: `public/index.html`, `public/style.css`, `public/demo.js`, `public/i18n.js` (переводы EN/ES/中文), `public/foodfi-token.webp` (монета FDFi).

- Публикация: push в `main` → `.github/workflows/deploy.yml` → Cloudflare Worker `foodfi-site` со статическими файлами (`wrangler deploy --assets=public`).
- Проверка перед коммитом: открыть `public/index.html` в браузере (или `npx serve public`), убедиться, что нет ошибок в консоли и вёрстка не съехала на ширине телефона (375 px).
- Основной язык — русский (в HTML); при изменении текста обнови переводы в `public/i18n.js`. Ссылки на Telegram-бота игры — `https://t.me/Chebutapbot`.
- Секреты не коммитить. Force-push запрещён.
