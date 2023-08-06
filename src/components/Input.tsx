import { useStore } from "../store/useStore.ts";
import { getVowels } from "../lib/getVowels.ts";
import { getConsonants } from "../lib/getConsonants.ts";

export const Input = () => {
  const [consonants, updateText, updateRemovedVowels] = useStore((state) => [
    state.consonants,
    state.updateText,
    state.updateRemovedVowels,
  ]);

  const handleUpdateText = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateText(getConsonants(e.target.value));
    updateRemovedVowels(getVowels(consonants + e.target.value));
  };

  console.log(useStore.getState());

  return (
    <>
      <label htmlFor='sentence' className='flex flex-col'>
        <span className='text-lg font-semibold'>Enter a sentence: </span>
        <span className='italic text-xs'>(This input removes vowels)</span>
      </label>
      <input
        type='text'
        id='sentence'
        className='rounded rounded-l-none focus:outline-none px-3 py-2 w-60'
        onChange={handleUpdateText}
        autoComplete='off'
      />
    </>
  );
};
