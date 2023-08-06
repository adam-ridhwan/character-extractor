import { useStore } from "../store/useStore.ts";

export const TextOutput = () => {
  const [text] = useStore((state) => [state.text]);

  // Regular expression to match vowels
  const vowels = /[aeiouAEIOU]/g;

  // Replace vowels with an empty string
  const textWithoutVowels = text.replace(vowels, "");

  return (
    <>
      <p>{textWithoutVowels}</p>
    </>
  );
};
