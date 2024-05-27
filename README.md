## Вход

Для входа есть две учётные записи:
1) username - 123
2) admin - 123

## Запуск проекта

```
npm install - устанавливаем зависимости
npm run start - запуск проекта в dev режиме
```

----

## Скрипты

- `npm run start` - Запуск frontend проекта на rsbuild dev server + backend
- `npm run start:dev` - Запуск frontend проекта на rsbuild dev server
- `npm run start:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме
- `npm run prettier` - Форматирует файлы согласно правилам
- `npm run lint:eslint` - Проверка ts, js файлов линтером
- `npm run lint:eslint:fix` - Исправление ts, js файлов линтером
- `npm run lint:stylelint` - Проверка scss, css файлов линтером
- `npm run lint:stylelint:fix` - Исправление scss, css файлов линтером

----

## Архитектура проекта

Проект написан в соответствии с методологией Feature sliced design

Ссылка на документацию - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

----

## Линтинг

В проекте используется eslint для проверки typescript кода, 
stylelint для проверки файлов со стилями, prettier для форматирования кода 

Для контроля главных архитектурных принципов используется eslint plugin *@conarti/eslint-plugin-feature-sliced*
Для сортировки import используется eslint plugin *eslint-plugin-import*

##### Запуск линтеров
- `npm run lint:eslint` - Проверка ts, js файлов линтером
- `npm run lint:eslint:fix` - Исправление ts, js файлов линтером
- `npm run lint:stylelint` - Проверка scss, css файлов линтером
- `npm run lint:stylelint:fix` - Исправление scss, css файлов линтером

----

## Конфигурация проекта

Для разработки проект используется Rsbuild

Ссылка на документацию - https://rsbuild.dev/

Вся конфигурация хранится в файле `rsbuild.config.ts`

----

## Работа с данными

Взаимодействие с данными осуществляется с помощью axios.
В качестве сервера используется json-server

----

## Сущности (entities)

- [Recipe](/src/entities/Recipe)
- [User](/src/entities/User)

----

## Фичи (features)

- [LoginByUsername](/src/features/LoginByUsername)
- [RecipeAddForm](/src/features/RecipeAddForm)
- [RecipeEditForm](/src/features/RecipeEditForm)
- [RecipeForm](/src/features/RecipeForm)
- [RecipesCategory](/src/features/RecipesCategory)
- [RecipesList](/src/features/RecipesList)
- [RecipesOrder](/src/features/RecipesOrder)
- [RecipesSearch](/src/features/RecipesSearch)
- [RecipesSort](/src/features/RecipesSort)

----

## UI

В проекте используется css framework Bootstrap

Ссылка на документацию - https://getbootstrap.com/
