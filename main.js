// Start Declaring The Variable

let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");
// End Declaring

////////////////////////////////////////////////////////////////

// Start validateName
function validateName() {
  let name = document.getElementById("contact-name").value;

  if (name.length === 0) {
    nameError.innerHTML = "Name is Required.";
    return false;
  } else if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameError.innerHTML = "Enter , a valid Name Please";
    return false;
  }
  // nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
  nameError.innerHTML = "Great Work.";
  nameError.style.color = "green";

  return true;
}
// End validateName

////////////////////////////////////////////////////////////////

// Start validatePhone
function validatePhone() {
  let phone = document.getElementById("contact-phone").value;
  if (phone.length === 0) {
    phoneError.innerHTML = "Phone is Required.";
    return false;
  } else if (phone.length !== 10) {
    phoneError.innerHTML = "Phone should be 10 digits.";
    return false;
  } else if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only Digits are allowed.";
    return false;
  } else {
    phoneError.innerHTML = "Great Work.";
    phoneError.style.color = "green";
    return true;
  }
}

// End validatePhone

////////////////////////////////////////////////////////////////

// Start validateEmail

function validateEmail() {
  let email = document.getElementById("contact-email").value;
  if (email.length === 0) {
    emailError.innerHTML = "Email is Required.";
    return false;
  } else if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    emailError.innerHTML = "Email is Invalid.";
    return false;
  } else {
    emailError.innerHTML = "Great Work.";
    emailError.style.color = "green";
    return true;
  }
}

// End validateEmail

////////////////////////////////////////////////////////////////

// Start validateMessage
function validateMessage() {
  let message = document.getElementById("contact-message").value;
  let required = 30;
  let conc = required - message.length;
  if (conc > 0) {
    messageError.innerHTML = conc + "More Characters are required.";
    return false;
  } else {
    messageError.innerHTML = "Great Work.";
    messageError.style.color = "green";
    return true;
  }
}

// End validateMessage

////////////////////////////////////////////////////////////////

// Start validateForm

function validateForm() {
  if (
    !validateName() ||
    !validateEmail() ||
    !validateForm() ||
    !validatePhone() ||
    !validateMessage()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = "Please , Fix The Input Fields";
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);

    return false;
  }
}

// End validateForm
