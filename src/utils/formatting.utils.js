/**
 * Formats an error message with specific styling and returns it as an HTML string.
 * It transforms the PascalCase 'name' of the error to spaced string, makes it bold,
 * prefixes it with a cross mark emoji, and places the 'message' in a paragraph.
 *
 * @param {Object} input - The input object to format.
 * @param {string} type - The type of the input object.
 * @returns {string} Formatted error message as an HTML string.
 *

 */
export const formatPostComment = ({ input, type }) => {
  if (type === "ERROR" && input.shouldResultInPRComment) {
    const spacedName = input.name.replace(/([A-Z])/g, " $1").trim();
    const outputErrorMessage =
      `### ❌ ${spacedName}\n` + "\n" + `${input.message}\n`;
    return outputErrorMessage;
  }
  return input.message;
};

/**
 * Capitalizes the first letter of a given string.
 *
 * @param {string} str - The string to be capitalized.
 * @returns {string} The capitalized string if the input is a valid string,
 *                   otherwise returns the original input.
 */
export const capitalize = (str) => {
  if (str && typeof str === "string") {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  return str;
};

/**
 * Gets the current date and returns it in a formatted string.
 *
 * @returns {string} The current date in 'YYYY-MM-DD' format.
 */
export function getCurrentDateFormatted() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // Months are zero-indexed
  const day = now.getDate();

  const formattedMonth = month.toString().padStart(2, "0");
  const formattedDay = day.toString().padStart(2, "0");

  return `${year}-${formattedMonth}-${formattedDay}`;
}
