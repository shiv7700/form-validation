const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // select input
  const fullName = document.querySelector(".full-name");
  const email = document.querySelector(".email-es");
  const mobile = document.querySelector(".mobile");
  const password = document.querySelector(".password");
  const reEnter = document.querySelector(".re-enter");
  const birth = document.querySelector(".birth");
  const grad = document.querySelector(".grad");
  const checkbox = document.getElementsByClassName("checkbox");
  const photo = document.querySelector(".photo");

  // select error
  const errorName = document.querySelector(".error-name");
  const errorEmail = document.querySelector(".error-email");
  const errorMobile = document.querySelector(".error-mobile");
  const errorPassword = document.querySelector(".error-password");
  const errorBirth = document.querySelector(".error-birth");
  const errorGrad = document.querySelector(".error-grad");
  const errorGender = document.querySelector(".error-gender");
  const errorCheckbox = document.querySelector(".error-checkbox");
  const errorPhoto = document.querySelector(".error-photo");

  // logic
  // name
  if (fullName.value === "") {
    errorName.innerHTML = `<p style="color: red;">full name is empty</p>`;
  } else if (fullName.value.length <= 3 || fullName.value.length >= 25) {
    errorName.innerHTML = `<p style="color: red;">full name must be between 3 and 25 characters</p>`;
  } else {
    errorName.innerHTML = ``;
  }

  // email
  const emailValidationRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  let emailAddress = email.value;
  let result = emailValidationRegex.test(emailAddress);
  if (email.value === "") {
    errorEmail.innerHTML = `<p style="color: red">email address is empty</p>`;
  } else if (result === false) {
    errorEmail.innerHTML = `<p style="color: red">email is not in valid form</p>`;
  } else {
    errorEmail.innerHTML = ``;
  }

  // mobile
  if (mobile.value === "") {
    errorMobile.innerHTML = `<p style="color: red">mobile number is empty</p>`;
  } else if (mobile.value.length !== 10) {
    errorMobile.innerHTML = `<p style="color: red">mobile number should be 10 digits</p>`;
  } else if (Number(mobile.value) < 0) {
    errorMobile.innerHTML = `<p style="color: red">phone number can't be less than zero</p>`;
  } else {
    errorMobile.innerHTML = ``;
  }

  // password
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()-=_+{};':"\\|,.<>/?]+$/;
  if (password.value === "" || reEnter.value === "") {
    errorPassword.innerHTML = `<p style="color: red;">password is empty</p>`;
  } else if (password.value.length !== reEnter.value.length) {
    errorPassword.innerHTML = `<p style="color: red;">password doesn't password</p>`;
  } else if (password.value.length === reEnter.value.length) {
    if (passwordRegex.test(password.value)) {
      errorPassword.innerHTML = ``;
    } else {
      errorPassword.innerHTML = `<p style="color: red;">Password is not okay , use 8+ characters, mix upper & lower case, add a number, and include a special character</p>`;
    }
  } else {
    errorPassword.innerHTML = ``;
  }

  // birth
  if (birth.value === "") {
    errorBirth.innerHTML = `<p style="color: red">DOB is empty</p>`;
  } else {
    errorBirth.innerHTML = ``;
  }

  // option
  if (grad.value === "select education") {
    errorGrad.innerHTML = `<p style="color: red">please select a option</p>`;
  } else {
    errorGrad.innerHTML = ``;
  }

  // gender
  let selectedRadio = document.querySelector('input[name="gender"]:checked');
  if (selectedRadio === null) {
    errorGender.innerHTML = `<p style="color: red">please select gender</p>`;
  }

  // language
  const checked = [];
  for (let i = 0; i < checkbox.length; i++) {
    if (checkbox[i].checked) {
      checked.push(checkbox[i].value);
    }
  }

  if (checked.length === 0) {
    errorCheckbox.innerHTML = `<p style="color: red">please select atleast one language</p>`;
  } else {
    errorCheckbox.innerHTML = ``;
  }

  // photo
  let photoInput = photo.files[0];

  if (photoInput === undefined) {
    errorPhoto.innerHTML = `<p style="color: red">please select photo</p>`;
  } else if (photoInput.type !== "image") {
    errorPhoto.innerHTML = `<p style="color: red">selected file is not image</p>`;
  } else if (photoInput.size >= 1_000_000) {
    errorPhoto.innerHTML = `<p style="color: red">selected file is greater than 5 mb</p>`;
  }
});

// password
const showPass = document.querySelector(".show-pass");
const showEnter = document.querySelector(".show-enter");

showPass.addEventListener("click", function () {
  const password = document.querySelector(".password");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
});

showEnter.addEventListener("click", function () {
  const reEnter = document.querySelector(".re-enter");
  if (reEnter.type === "password") {
    reEnter.type = "text";
  } else {
    reEnter.type = "password";
  }
});
