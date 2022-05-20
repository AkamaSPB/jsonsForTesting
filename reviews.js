'use strict';

const root = document.querySelector('#root');
let translate = 0;
let index = 0;
// след. строка это именно то, из за чего мы подгружали скрипт после рендера списка,
// здесь мы получаем длину списка, который к этому моменту должен быть полностью отрисован
const length = document.getElementsByClassName('slider__dot').length;
console.log(length);

// Функция для управления слайдером по стрелочкам
function swipeSlider(side) {
  // Проверяем какая именно стрелочка нажата и выполняем сдвиг, а также меняем значение активного кружочка
  if (side === 'left') {
    if (index === 0) {
      translate = 761 * (length - 1) * (-1);
      index = (length - 1);
    } else {
      translate += 761;
      index--;
    }
  } else if (side === 'right') {
    if (index === length-1) {
      translate = 0;
      index = 0;
    } else {
      translate -= 761;
      index++;
    }
  }

  // Эти строчки уже вносят изменения в дерево DOM по вычисленным выше значениям
  root.setAttribute('style', `transform: translateX(${translate}px)`);

  document.getElementsByClassName('slider__dot-active')[0]
    .classList.toggle('slider__dot-active');

  document.getElementsByClassName('slider__dot')[index]
    .classList.toggle('slider__dot-active');
}