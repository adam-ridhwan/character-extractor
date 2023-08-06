export const getNumbers = (text: string): string => {
  // Regular expression to match non-numeric characters.
  const nonNumericCharacters = /\D/g;

  // Replace non-numeric characters with an empty string
  const numbers = text.replace(nonNumericCharacters, "");

  return numbers;
};
