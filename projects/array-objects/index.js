/*
 Задание 1:
 Напишите аналог встроенного метода forEach для работы с массивами
 Посмотрите как работает forEach и повторите это поведение для массива, который будет передан в параметре array
 Пример:
   forEach([1, 2, 3], (el) => console.log(el))
 */
function forEach(array, fn) {
  for (let i = 0; i < array.length; i++) {
    fn(array[i], i, array);
  }
}

/*
 Задание 2:
 Напишите аналог встроенного метода map для работы с массивами
 Посмотрите как работает map и повторите это поведение для массива, который будет передан в параметре array
 Пример:
   map([1, 2, 3], (el) => el ** 2) // [1, 4, 9]
 */
function map(array, fn) {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(fn(array[i], i, array));
  }

  return newArray;
}

/*
 Задание 3:
 Напишите аналог встроенного метода reduce для работы с массивами
 Посмотрите как работает reduce и повторите это поведение для массива, который будет передан в параметре array
 Пример:
   reduce([1, 2, 3], (all, current) => all + current) // 6
 */
function reduce(array, fn, initial) {
  let previousValue = initial || array[0],
    index = initial ? 0 : 1;

  for (; index < array.length; index++) {
    // previousValue – последний результат вызова функции, он же «промежуточный результат».
    // currentItem – текущий элемент массива, элементы перебираются по очереди слева - направо.
    // index – номер текущего элемента.
    // array – обрабатываемый массив.

    previousValue = fn(previousValue, array[index], index, array);
  }

  return previousValue;
}

/*
 Задание 4:
 Функция должна перебрать все свойства объекта, преобразовать их имена в верхний регистр и вернуть в виде массива
 Пример:
   upperProps({ name: 'Сергей', lastName: 'Петров' }) вернет ['NAME', 'LASTNAME']
 */
function upperProps(obj) {
  return Object.keys(obj).map(function (reg) {
    return reg.toUpperCase();
  });
}
const result = upperProps({
  name: 'Сергей',
  lastName: 'Петров',
});

console.log(result);

/*
 Задание 5 *:
 Функция принимает объект и должна вернуть Proxy для этого объекта
 Proxy должен перехватывать все попытки записи значений свойств и возводить это значение в квадрат
 Пример:
   const obj = createProxy({});
   obj.foo = 2;
   console.log(obj.foo); // 4
 */
function createProxy(obj) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value * value;
      return true;
    },
  });
}

export { forEach, map, reduce, upperProps, createProxy };
