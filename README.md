3 ЧАСТЬ ПРИЛОЖЕНИЯ С ЗАГРУЗКОЙ ОТЧЕТА ПО ОПРОСНИКУ НЕ СДЕЛАНА ИБО Я 7 ЧАСОВ ЖДАЛ КОГДА ПРИДЕТ ОТЧЕТ ПО ОТПРАВЛЕННОМУ ОПРОСНИКУ(УСПЕШНОМУ), ЧЕКАЛ ПО report/taskId 
НО ОТВЕТ ВЕСЬ ДЕНЬ БЫЛ "в обработке"  У МЕНЯ НЕ БЫЛО ПРИМЕРА ОТВЕТА С СЕРВЕРА С СЫЛКОЙ НА ПДФ ФАЙЛ ЧТОБ КОРРЕКТНО СОЗДАТЬ ИНТЕРФЕЙС ОТЧЕТА ПО ОПРОСНИКУ

🧠 School Quiz (Test App)
Приложение для тестов с возможностью загрузки изображений, написано на Next.js, TypeScript, RTK Query и т. д.

🚀 Как запустить проект
Клонируй репозиторий:

bash
git clone https://github.com/umer134/demo-pshylogue-quiz.git
cd school-quiz
Установи зависимости:

bash

npm install
Создай файл окружения .env.local:

⚠️ Переменные с префиксом NEXT_PUBLIC_ доступны на клиенте.

bash

touch .env.local
Вставь в .env.local:
NEXT_PUBLIC_SEND_PICS_URL=роут для отправки первых 3 фото
NEXT_PUBLIC_SUBMIT_SURVEY_URL=роут для запроса на проверку опросника

Запусти локально:
"@reduxjs/toolkit": "^2.8.2",
    "lucide-react": "^0.513.0",
    "next": "15.3.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-redux": "^9.2.0",
    "redux-saga": "^1.3.0"

bash
npm run dev
Приложение будет доступно по адресу: http://localhost:3000

📦 Стек технологий
Next.js (на Webpack)

TypeScript

RTK Query

Redux Toolkit

FormData API

Post-запросы на внешний сервер с загрузкой изображений

