const ingredients = [
   'Potatoes',
   'Mushrooms',
   'Garlic',
   'Tomatos',
   'Herbs',
   'Condiments',
]

const listOfItems = document.querySelector('#ingredients')

const makeMenuNew = ingredients.map(element => {
   const liItem = document.createElement('li')
   liItem.textContent = element
   liItem.classList.add('item')
   return liItem
})

listOfItems.append(...makeMenuNew)

// @ ------------------------------------------------------------
// В HTML есть пустой список ul#ingredients.

// <ul id="ingredients"></ul>
// В JavaScript есть массив строк.

// const ingredients = [
//   "Potatoes",
//   "Mushrooms",
//   "Garlic",
//   "Tomatos",
//   "Herbs",
//   "Condiments",
// ];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.
