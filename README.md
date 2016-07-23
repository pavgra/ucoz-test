# uCoz-test

## Intro
Test assignment for uCoz

## Task
Собрать страницу с нижеописанным функционалом:

Слева форма для добавления новой книги, справа - список книг. В форме должны быть поля: автор, год издания, название книги, кол-во страниц. В списке - автор и название книги. У каждого элемента в списке книг должны быть кнопки edit и remove. При remove книга удаляется из списка, при edit - ее данные подставляются в форму для редактирования. При добавлении, редактировании и удалении страница не должна перезагружаться.

В качестве хранилища нужно использовать localStorage (при закрытии окна браузера и повторном открытии - данные должны восстанавливаться). Можно использовать любые css-библиотеки, из js - нельзя использовать MV*-библиотеки. Страница должна быть адаптивной (на мобильных устройствах (при недостаточной ширине окна браузера) список книг должен уходить под форму добавления). Страница должна открываться с диска в браузере.

## Requirements

Installed Node.js and Bower

## Deploy
```
npm install
bower install
gulp
```

## Conventions
CSS markup is done using [BEM methology](https://en.bem.info/methodology/).