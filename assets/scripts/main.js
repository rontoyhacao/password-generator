`use strict`;

const generateBtn = document.querySelector(`.js-primary-btn`);
const passwordInputField = document.querySelector(`.js-primary-field`);
const copyBtn = document.querySelector(`.js-copy-btn`);
const uppercaseCheckbox = document.querySelector(`.js-checkbox`);

const characters = [
  "abcdefghijklmnoqrstuvwxyz",
  "0123456789",
  '?<>!"£$%^&*()-+./',
];
const charactersUpper = [
  "abcdefghijklmnoqrstuvwxyz",
  "ABCDEFGHIJKLMNOQRSTUVWXYZ",
  "0123456789",
  '?<>!"£$%^&*()-+./',
];

const generatePassword = function () {
  let newPassword = ``;
  let selectedCharType;
  for (let i = 0; i < 16; i++) {
    if (uppercaseCheckbox.checked) {
      selectedCharType = charactersUpper[Math.trunc(Math.random() * 4)];
      newPassword +=
        selectedCharType[Math.trunc(Math.random() * selectedCharType.length)];
    } else {
      selectedCharType = characters[Math.trunc(Math.random() * 3)];
      newPassword +=
        selectedCharType[Math.trunc(Math.random() * selectedCharType.length)];
    }
  }
  return newPassword;
};

const displayGeneratedPassword = function () {
  passwordInputField.value = generatePassword();
  copyBtn.classList.remove(`hidden`);
};

generateBtn.addEventListener(`click`, displayGeneratedPassword);
copyBtn.addEventListener(`click`, function () {
  navigator.clipboard.writeText(passwordInputField.value).then(function () {
    passwordInputField.select();
  });
});
