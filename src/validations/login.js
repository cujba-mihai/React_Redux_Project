const loginValidation = (
  user_email,
  user_password,
  current_email,
  current_password
) => {
  const errors = {};

  if (user_email !== current_email) {
    errors.email = "Wrong email";
  }

  if (user_password !== current_password) {
    errors.password = "Wrong password";
  }

  return errors;
};

export default loginValidation;
