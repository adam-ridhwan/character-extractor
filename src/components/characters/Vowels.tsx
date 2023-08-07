import { useStore } from "../../store/useStore.ts";

export const Vowels = () => {
  const [vowels] = useStore((state) => [state.vowels]);

  return (
    <>
      <div
        className='bg-customRed rounded-xl p-3 h-min border-2 border-red-900
        w-[350px] sm:w-[500px] md:w-[650px] lg:w-[225px] xl:w-[300px] 2xl:w-[350px]'
      >
        <span className='flex justify-center font-semibold text-lg border-b border-b-slate-400'>Vowels</span>
        <p className='break-all min-h-[50px]'>{vowels}</p>
      </div>
    </>
  );
};
