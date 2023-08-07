import { useStore } from "../../store/useStore.ts";

export const Consonants = () => {
  const [consonants] = useStore((state) => [state.consonants]);

  return (
    <>
      <div
        className='bg-customBlue rounded-xl p-3 h-min border-2 border-sky-800
        w-[350px] sm:w-[500px] md:w-[650px] lg:w-[225px] xl:w-[300px] 2xl:w-[350px]'
      >
        <span className='flex justify-center font-semibold text-lg border-b border-1 border-b-slate-400'>
          Consonants
        </span>
        <p className='break-all min-h-[50px]'>{consonants}</p>
      </div>
    </>
  );
};
