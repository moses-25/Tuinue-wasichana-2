/**
 * Validate an email address
 * @param {string} email
 * @returns {boolean}
 */
export function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  
  /**
   * Validate password (min 6 chars as example)
   * @param {string} password
   * @returns {boolean}
   */
  export function isValidPassword(password) {
    return typeof password === "string" && password.length >= 6;
  }
  
  /**
   * Validate required field
   * @param {string} value
   * @returns {boolean}
   */
  export function isRequired(value) {
    return value != null && value.toString().trim() !== "";
  }
  
  /**
   * Validate URL
   * @param {string} url
   * @returns {boolean}
   */
  export function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  }