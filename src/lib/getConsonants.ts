export const getConsonants = (text: string): string => {
  // Regular expression to match vowels, symbols, numbers, and spaces.
  const unwantedCharacters = /[aeiouAEIOU0-9\s\W_]/g;

  // Replace unwanted characters with an empty string
  const consonants = text.replace(unwantedCharacters, "");

  return consonants;
};
