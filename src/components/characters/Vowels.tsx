import { useStore } from "../../store/useStore.ts";

export const Vowels = () => {
  const [vowels] = useStore((state) => [state.vowels]);

  return (
    <>
      <div className='w-60 bg-green-800 rounded-xl p-3 h-min'>
        <span className='flex justify-center font-semibold text-lg'>Vowels</span>
        <p className='break-words'>{vowels}</p>
      </div>
    </>
  );
};
