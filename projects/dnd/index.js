/* Задание со звездочкой */

/*
 Создайте страницу с кнопкой.
 При нажатии на кнопку должен создаваться div со случайными размерами, цветом и позицией на экране
 Необходимо предоставить возможность перетаскивать созданные div при помощи drag and drop
 Запрещено использовать сторонние библиотеки. Разрешено пользоваться только тем, что встроено в браузер
 */

/*
 homeworkContainer - это контейнер для всех ваших домашних заданий
 Если вы создаете новые html-элементы и добавляете их на страницу, то добавляйте их только в этот контейнер
 Пример:
   const newDiv = document.createElement('div');
   homeworkContainer.appendChild(newDiv);
 */
import './dnd.html';

const homeworkContainer = document.querySelector('#app');

function random(from, to) {
  return parseInt(from + Math.random() * to - from);
}

let startPath;
let startX = 0;
let startY = 0;

document.addEventListener('mousemove', (e) => {
  if (startPath) {
    startPath.style.top = e.clientY - startY + 'px';
    startPath.style.left = e.clientX - startX + 'px';
  }
});

export function createDiv() {
  const newDiv = document.createElement('div');
  const minSize = 10;
  const maxSize = 300;

  newDiv.className = 'draggable-div';
  newDiv.style.background = '#' + random(0, 0xffffff).toString(16);
  newDiv.style.top = random(0, window.innerHeight) + 'px';
  newDiv.style.left = random(0, window.innerWidth) + 'px';
  newDiv.style.width = random(minSize, maxSize) + 'px';
  newDiv.style.height = random(minSize, maxSize) + 'px';

  newDiv.addEventListener('mousedown', (e) => {
    startPath = newDiv;
    startX = e.offsetX;
    startY = e.offsetY;
  });
  newDiv.addEventListener('mouseup', () => (startPath = false));

  return newDiv;
}

const addDivButton = homeworkContainer.querySelector('#addDiv');

addDivButton.addEventListener('click', function () {
  const div = createDiv();
  homeworkContainer.appendChild(div);
});
