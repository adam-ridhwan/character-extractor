import { useStore } from "../../store/useStore.ts";

export const Consonants = () => {
  const [consonants] = useStore((state) => [state.consonants]);

  return (
    <>
      <div className='w-60 bg-sky-800 rounded-xl p-3'>
        <span className='flex justify-center font-semibold text-lg'>Consonants</span>
        <p className='break-words'>{consonants}</p>
      </div>
    </>
  );
};
