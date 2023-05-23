function removeErrorMessage() {

}

function confirmSignUp() {
 const formFields = document.querySelectorAll('.form-field');

 formFields.forEach((field) => {
  const checkInput = field.querySelector(".check-input");

  if (!checkInput.value) {
   const fieldMessage = document.createElement("span");
   fieldMessage.textContent = "This field needs to be filled.";
   fieldMessage.classList.add("error-message");
   field.appendChild(fieldMessage);
  }
 });

}

const confirmBtn = document.querySelector(".sign-up-button");
confirmBtn.addEventListener("click", confirmSignUp);
