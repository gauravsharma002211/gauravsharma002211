export const REQUIRED = "Required";
export const EMAIL = "Enter a valid Email";
export const PASSWORD = "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character";

export const EMAIL_REG = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
export const PASSWORD_REG = /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/;
