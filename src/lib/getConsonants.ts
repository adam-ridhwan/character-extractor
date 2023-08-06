export const getConsonants = (text: string): string => {
  // Regular expression to match vowels
  const vowels = /[aeiouAEIOU]/g;

  // Replace vowels with an empty string
  const textWithoutVowels = text.replace(vowels, "");

  return textWithoutVowels;
};
