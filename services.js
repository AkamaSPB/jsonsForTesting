'use strict';

// Получаем DOM элемент модалки
const modalWindow = document.getElementsByClassName('services__modalWindow')[0];

// 
const openModalWindow = (index) => {
  // Даже, блять, не спрашивай...
  // Ну если серьезно, то это для оптимизации,
  // Я не записывал результат ответа с сервера в переменную,
  // ибо на выходе из функции, результат обернется в промис,
  // А таскать его туда и сюда это полное извращение и вообще это очень некрасивый подход
  const title = modalWindow.getAttribute(`data-title${index}`);
  const body = modalWindow.getAttribute(`data-body${index}`);

  // Получили данные из какой то жепы и вносим их в наше дерево DOM
  document.getElementsByClassName('modalWindow__title4')[0].innerHTML = title;
  document.getElementsByClassName('modalWindow__paragraph1')[0].innerHTML = body;

  // Делаем окно видимым
  modalWindow.classList.toggle('services__modalWindow-active');
};

const closeModalWindow = () => {
  // Делаем окно невидимым
  modalWindow.classList.toggle('services__modalWindow-active');
};