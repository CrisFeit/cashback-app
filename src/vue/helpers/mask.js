/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
let mask = (input, mask, event,exp) => {
  let booleanMask;

  const typed = event.keyCode;
  const regex = exp;
  const fieldNumbers = input.value.toString().replace(regex, '');

  let positionField = 0;
  let newField = '';
  let sizeMask = fieldNumbers.length;

  if (typed !== 8) {
    for (let i = 0; i <= sizeMask; i++) {
      booleanMask =
        mask.charAt(i) === '-' ||
        mask.charAt(i) === '.' ||
        mask.charAt(i) === '/';
      booleanMask =
        booleanMask ||
        mask.charAt(i) === '(' ||
        mask.charAt(i) === ')' ||
        mask.charAt(i) === ' ';
      if (booleanMask) {
        newField += mask.charAt(i);
        sizeMask += sizeMask;
      } else {
        newField += fieldNumbers.charAt(positionField);
        positionField++;
      }
    }
    input.value = newField;
    return true;
  }
  return true;
};

export default mask;

// let campCheck;
// if (campo.value.length > 1) {
//   campCheck = campo.value.replace(/[^a-g][^0-6]+/g, "").toUpperCase();
//   campo.value = campCheck;
//   controller.fireReady(campCheck);
// } else {
//   campCheck = campo.value.replace(/[^a-g]+/g, "").toUpperCase();
//   controller.abort();
//   campo.value = campCheck;
// }