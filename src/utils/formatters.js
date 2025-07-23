// Format date to a readable format
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

// Format number to currency (e.g., KES 1,000.00)
export const formatCurrency = (amount, currency = 'KES') => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency,
  }).format(amount);
};

// Capitalize the first letter of a string
export const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
