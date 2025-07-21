/**
 * Format a date string to 'MMM DD, YYYY'
 * @param {string|Date} date
 * @returns {string}
 */
export function formatDate(date) {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric"
    });
  }
  
  /**
   * Capitalize first letter of a string
   * @param {string} str
   * @returns {string}
   */
  export function capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  }
  
  /**
   * Truncate a string to a given length with ellipsis
   * @param {string} str
   * @param {number} maxLength
   * @returns {string}
   */
  export function truncate(str, maxLength = 100) {
    if (!str) return "";
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  }