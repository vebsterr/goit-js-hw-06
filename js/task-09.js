const bodyEl = document.querySelector('body')
const btnEl = document.querySelector('.change-color')
const colorValueEl = document.querySelector('.color')

btnEl.addEventListener('click', changeColor)

function changeColor() {
  const randomColorize = getRandomHexColor()
  bodyEl.style.backgroundColor = randomColorize
  colorValueEl.textContent = randomColorize
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}

// @ ---------------------------------------------------------------------------------------------------------

// Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.
