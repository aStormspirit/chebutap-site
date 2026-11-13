# AGENTS.md

Сайт FoodFi — статическая страница без сборки: `public/index.html`, `public/style.css`, `public/demo.js`, `public/foodfi-token.png`.

- Публикация: push в `main` → `.github/workflows/deploy.yml` → Cloudflare Pages (`wrangler pages deploy public`).
- Проверка перед коммитом: открыть `public/index.html` в браузере (или `npx serve public`), убедиться, что нет ошибок в консоли и вёрстка не съехала на ширине телефона (375 px).
- Тексты на сайте — по-русски. Ссылки на Telegram-бота игры — `https://t.me/Chebutapbot`.
- Секреты не коммитить. Force-push запрещён.
