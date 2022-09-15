const atLeastOneUpperCase = /[A-Z]/;
const atLeastOneLowerCase = /([a-z])/;
const atLeastOneNumber = /(\d)/;
const atLeastOneSpecialCharacter = /(\W)|_/;
const AtLeastEightDigits = /.{8,}/;

const cellphoneFormat = /\([1-9]{2}\)\s9[1-9]\d{3}-\d{4}/;

export {
  atLeastOneUpperCase,
  atLeastOneLowerCase,
  atLeastOneNumber,
  atLeastOneSpecialCharacter,
  AtLeastEightDigits,
  cellphoneFormat,
};
