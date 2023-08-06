import { useStore } from "../store/useStore.ts";

export const Consonants = () => {
  const [consonants] = useStore((state) => [state.consonants]);

  return (
    <>
      <br />
      <div className=''>
        {consonants && <span className='font-semibold'>Consonants:</span>}
        <p className='break-words'>{consonants}</p>
      </div>
    </>
  );
};
