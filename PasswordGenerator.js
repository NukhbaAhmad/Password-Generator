//Click -> Generate Password Button
let Password = "";
function PasswordCustomize() {
  //UpperCase
  if (document.querySelector("#UpperCase").checked) {
    Password += "ABCDEFHIJKLMNOPQRSTUVWXYZ";
  }
  //LowerCase
  if (document.querySelector("#LowerCase").checked) {
    Password += "abcdefghijklmnopqrstuvwxyz";
  }
  //Numbers
  if (document.querySelector("#Numbers").checked) {
    Password += "1234567890";
  }
  //Special Characters
  if (document.querySelector("#SpecialCharacters").checked) {
    Password += "!@#$%^&*()_+-={}[]|'\\\":;?/><,.";
  }
  PasswordGenerate();
  ProgressBar();
}
//Random Selection from Customized Password
function PasswordGenerate() {
  const PasswordLengthInput = document.querySelector(
    "#PasswordLenghtInput"
  ).value;
  const InputPasswordDisplay = document.querySelector("#InputPasswordDisplay");
  InputPasswordDisplay.value = "";
  const PasswordLenght = Password.length;
  for (let i = 0; i < PasswordLengthInput; i++) {
    InputPasswordDisplay.value += Password.charAt(
      Math.floor(Math.random() * PasswordLenght)
    );
  }
  Password = "";
}
//Copy Password To ClipBoard
function CopyPassword() {
  const CopiedPassword = InputPasswordDisplay.value;
  navigator.clipboard.writeText(CopiedPassword);
}
//Progress Bar
function ProgressBar() {
  const ProgressBar = document.querySelector("#ProgresssBar");
  const PasswordLengthInput = document.querySelector(
    "#PasswordLenghtInput"
  ).value;
  if (PasswordLengthInput < 7) {
    ProgressBar.className = "ProgressBarRed";
  }
  if (PasswordLengthInput >= 7) {
    ProgressBar.className = "ProgressBarYellow";
  }
  if (PasswordLengthInput > 8) {
    ProgressBar.className = "ProgressBarGreen";
  }
}