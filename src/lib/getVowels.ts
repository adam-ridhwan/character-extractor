export const getVowels = (string: string): string => {
  // Regular expression to match vowels
  const vowels = /[aeiouAEIOU]/g;

  // Match vowels from the string
  const matchedVowels = string.match(vowels);
  console.log(matchedVowels);

  // If there are vowels, join them into a single string, else return an empty string
  return matchedVowels ? matchedVowels.join("") : "";
};
