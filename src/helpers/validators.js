export function validateEmail(email, errors) {
  const isMailValid = String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  if (!isMailValid) {
    errors.email = "Type correct email";
  } else {
    delete errors.email;
  }
}

export function validatePassword(password, errors) {
  if (password.length < 6) {
    errors.password = "Password is not strong enough";
  } else {
    delete errors.password;
  }
}

export function validateCheckbox(checked, errors) {
  if (!checked) {
    errors.checkbox = "You have to accept it";
  } else {
    delete errors.checkbox;
  }
}

export function validateConfirmPassword(password, passwordToConfirm, errors) {
  if (password !== passwordToConfirm) {
    errors.confirmNewPassword = "Passwords are different";
  } else {
    delete errors.confirmNewPassword;
  }
}
