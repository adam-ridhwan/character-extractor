export const getSymbols = (string: string): string => {
  // Regular expression to match non-alphanumeric characters excluding spaces.
  const symbols = /[^a-zA-Z0-9\s]/g;

  // Match symbols from the string
  const matchedSymbols = string.match(symbols);

  // If there are symbols, join them into a single string, else return an empty string
  return matchedSymbols ? matchedSymbols.join("") : "";
};
