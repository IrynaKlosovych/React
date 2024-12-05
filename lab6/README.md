# Lab 6
## React Best Practices in Lab 5

1. Use functional components instead of class components. Component Composition. Use capitals for component names

Використовуються прості [компоненти](../lab5/src/components/), які можна перевикористати і їхні назви з великої літери

2. Avoid using inline styles

Використовуються [CSS модуль](../lab5/src/styles/App.module.css)

3. Use arrow functions

Використання стрілкових функцій покращує читабельність і використовується у [компонентах](../lab5/src/components/) та [для інших функцій](../lab5/src/utils/createTodoAtom.ts)

4. Use TypeScript

Типізація дозволя припускатись менше помилок

5. Use ESLint

Дозволяє легше знаходити помилки та виправляти

6. Folder Structure management

Правильна структура папок дає кращу орієнтацію по проєкту

7. State management

Використання стейт менеджменту дозволяє уникнути prop drilling. Хуки викликаються на початку [компонентів](../lab5/src/components/)

8. Maintain a structured import order

В [TodoList](../lab5/src/components/TodoList.tsx#L1-L8) імпорти в порядку спершу що з інших бібліотек, а потім що локально

