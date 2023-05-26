function validateInputs() {
  console.log("Data saved");
}

function removeErrorMessage() {
  const formFields = document.querySelectorAll(".form-field");

  formFields.forEach((field) => {
    const errorMessage = field.querySelector(".empty-field");
    if (!!errorMessage) {
      field.removeChild(errorMessage);
    }

    field.querySelector(".check-input").removeEventListener("focus", removeErrorMessage);
  });

  const setDateField = formFields[formFields.length - 1];
  setDateField.querySelector(".check-input").type = "date";
}

function confirmSignUp() {
  const formFields = document.querySelectorAll('.form-field');
  let emptyField = false;

  formFields.forEach((field) => {
    const checkInput = field.querySelector(".check-input");

    if (!checkInput.value && !field.querySelector(".empty-field")) {
      const emptyInfo = document.createElement("span");
      emptyInfo.textContent = "This field needs to be filled.";
      emptyInfo.classList.add("empty-field");

      field.appendChild(emptyInfo);
      checkInput.addEventListener("focus", removeErrorMessage);

      if (checkInput.type === "date") {
        checkInput.type = "text";
      }

      emptyField = true;

    }
  });

  if (!emptyField) {
    validateInputs();
  }
}

const confirmBtn = document.querySelector(".sign-up-button");
confirmBtn.addEventListener("click", confirmSignUp);
