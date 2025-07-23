// Check if an email is valid
export const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Check if password is strong enough (minimum 6 characters)
export const isStrongPassword = (password) => {
  return password.length >= 6;
};

// Check if a field is empty
export const isEmpty = (value) => {
  return value.trim() === '';
};

// Basic phone number validation (international format)
export const isValidPhone = (phone) => {
  const regex = /^\+?\d{10,15}$/;
  return regex.test(phone);
};

