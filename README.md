## Установка
```
// Копирование репозитория
git clone http://gitlab.nordclan/frontendspb/webpack/react-app.git

// Установка зависимостей
npm install

// Установка прекоммитов
npm run prepare
```

## Команды
Запуск разработки.
```
npm run start
```

Запуск билда.
```
npm run build
```
## Precommit
```
npx stylelint ./src --fix

npx eslint ./src --fix
```
## Инструменты

1. Framework: React 17 + Redux + Redux Saga + React Router
2. Linters: ESLint (+ Prettier), Stylelint, Husky
3. Compilers: Babel, TypeScript
4. CSS-preprocessor: SCSS
5. CSS-postprocessor: PostCSS
6. Bundler: Webpack 5