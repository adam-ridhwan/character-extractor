import { useStore } from "../store/useStore.ts";
import { getVowels } from "../lib/getVowels.ts";
import { getConsonants } from "../lib/getConsonants.ts";
import { getSymbols } from "../lib/getSymbols.ts";
import { getNumbers } from "../lib/getNumbers.ts";

export const Input = () => {
  const [updateConsonants, updateVowels, updateSymbols, updateNumbers] = useStore((state) => [
    state.updateConsonants,
    state.updateVowels,
    state.updateSymbols,
    state.updateNumbers,
  ]);

  const handleUpdateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateConsonants(getConsonants(e.target.value));
    updateVowels(getVowels(e.target.value));
    updateSymbols(getSymbols(e.target.value));
    updateNumbers(getNumbers(e.target.value));
  };

  return (
    <>
      <label htmlFor='sentence' className='flex flex-col'>
        <span
          className='font-semibold
          text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl'
        >
          Enter a sentence:
        </span>
        <span className='text-xl italic'>This text input separates consonants, vowels, numbers and symbols.</span>
      </label>
      <input
        type='text'
        id='sentence'
        className='rounded px-3 py-2 w-80 bg-gray-200 text-gray-900'
        onChange={handleUpdateText}
        autoComplete='off'
      />
    </>
  );
};
