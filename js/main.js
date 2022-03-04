const comment = 'Красивая фотография';
const minNumber = 1;
const maxNumber = 10;
const MAX_STRING_LENGTH = 140;

// Ссылка от куда взял скрипт https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
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

function checkLengthString(line, maxStringLength) {
  return line.length < maxStringLength;
}

getRandomIntInclusive(minNumber, maxNumber);
checkLengthString(comment, MAX_STRING_LENGTH);

