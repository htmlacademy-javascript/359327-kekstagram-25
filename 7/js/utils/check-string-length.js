const comment = 'Красивая фотография';
const MAX_STRING_LENGTH = 140;

// Проверка максимальной длины строки
export function checkLengthString(line, maxStringLength) {
  return line.length < maxStringLength;
}

checkLengthString(comment, MAX_STRING_LENGTH);
