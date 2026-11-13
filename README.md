# FoodFi — сайт

Статическая страница FoodFi (без сборки), файлы — в `public/`. Публикуется на Cloudflare Pages автоматически при каждом push в `main`.

## Настройка публикации (один раз)

Settings → Secrets and variables → Actions этого репозитория:

| Где | Имя | Значение |
|---|---|---|
| Secrets | `CLOUDFLARE_API_TOKEN` | dash.cloudflare.com → My Profile → API Tokens → Create Token → шаблон **Edit Cloudflare Workers** (или свой токен с правом **Account → Cloudflare Pages → Edit**) |
| Secrets | `CLOUDFLARE_ACCOUNT_ID` | dash.cloudflare.com → Workers & Pages → справа «Account ID» |
| Variables | `CF_PAGES_PROJECT` | имя проекта Pages, в который сейчас деплоите через wrangler (`wrangler pages project list`) |
| Variables | `SITE_URL` | необязательно: адрес сайта для проверки после публикации |

Пока чего-то не хватает, workflow не падает, а пишет, что пропущено.

Вручную: Actions → **Site → Cloudflare Pages** → Run workflow. Локально, как раньше: `npx wrangler pages deploy public --project-name=<проект>`.

## Нейросотрудник

Сайт правит Telegram-бот [chebutap-bot](https://github.com/aStormspirit/chebutap-bot): облачная задача Claude Code получает задачу из чата, правит этот репозиторий, пушит в `main` и ждёт публикации.
