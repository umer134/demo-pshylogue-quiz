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
NEXT_PUBLIC_SEND_PICS_URL=https://sirius-draw-test-94500a1b4a2f.herokuapp.com
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

