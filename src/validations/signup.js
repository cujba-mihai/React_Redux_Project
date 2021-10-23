const signupValidation = (userInfo) => {
  let errors = {};

  if (!userInfo.firstName) {
    errors.firstName = "First name is required";
  } else if (/\W/.test(userInfo.firstName)) {
    errors.firstName = "First name contains restricted characters";
  }

  if (!userInfo.lastName) {
    errors.lastName = "Last name is required";
  } else if (/\W/.test(userInfo.lastName)) {
    errors.lastName = "Last name contains restricted characters";
  }

  if (!userInfo.email) {
    errors.email = "Email is required";
  } else if (
    !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(userInfo.email)
  ) {
    errors.email = "Incorrect email";
  }

  if (!userInfo.firstPassword) {
    errors.firstPassword = "Password is required";
  } else if (userInfo.firstPassword.length > 10) {
    errors.firstPassword = "Password must not be longer than 10 characters";
  } else if (userInfo.firstPassword.length < 5) {
    errors.firstPassword = "Password must be more than 5 characters";
  }

  if (!userInfo.confirmPassword) {
    errors.confirmPassword = "Password confirmation is required";
  }

  if (userInfo.firstPassword !== userInfo.confirmPassword) {
    errors.confirmPassword = "Passwords don't match";
  }

  return errors;
};

export default signupValidation;
