const comment = 'Красивая фотография';
const minNumber = 1;
const maxNumber = 10;
const MAX_STRING_LENGTH = 140;

// Возвращает случайное целое число из переданного диапазона включительно
export function getRandomIntInclusive(min, max) {
  max = Math.floor(max);
  min = Math.floor(min);
  if (min < 0) {
    return 0;
  } else if (max < 0) {
    return max;
  } else if (min > max) {
    [min, max] = [max, min];
  }
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

// Проверка максимальной длины строки
export function checkLengthString(line, maxStringLength) {
  return line.length < maxStringLength;
}

getRandomIntInclusive(minNumber, maxNumber);
checkLengthString(comment, MAX_STRING_LENGTH);

