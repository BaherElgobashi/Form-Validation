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
  } else {
    // nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    nameError.innerHTML = "Great Work";
    nameError.style.color = "green";

    return true;
  }
}
// End validateName

////////////////////////////////////////////////////////////////
