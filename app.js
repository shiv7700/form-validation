const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // select input
  const fullName = document.querySelector(".full-name");
  const email = document.querySelector(".email-es");
  const mobile = document.querySelector(".mobile");
  const password = document.querySelector(".password");
  const reEnter = document.querySelector(".re-enter");

  // select error
  const errorName = document.querySelector(".error-name");
  const errorEmail = document.querySelector(".error-email");
  const errorMobile = document.querySelector(".error-mobile");
  const errorPassword = document.querySelector(".error-password");

  // logic
  // name
  if (fullName.value === "") {
    errorName.innerHTML = `<p style="color: red;">full name is empty</p>`;
  }

  // email
  if (email.value === "") {
    errorEmail.innerHTML = `<p style="color: red">email address is empty</p>`;
  }

  // mobile
  if (mobile.value === "") {
    errorMobile.innerHTML = `<p style="color: red">mobile number is empty</p>`;
  } else if (mobile.value.length >= 11) {
    errorMobile.innerHTML = `<p style="color: red">mobile number should be 10 digits</p>`;
  }

  // password
  if (password.value === "" || reEnter.value === "") {
    errorPassword.innerHTML = `<p style="color: red;">password is empty</p>`;
  } else if (password.value.length !== reEnter.value.length) {
    errorPassword.innerHTML = `<p style="color: red;">password doesn't password</p>`;
  }
});
