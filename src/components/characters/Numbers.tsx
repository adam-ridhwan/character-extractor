import { useStore } from "../../store/useStore.ts";

export const Numbers = () => {
  const [numbers] = useStore((state) => [state.numbers]);

  return (
    <>
      <div
        className='bg-yellow rounded-xl p-3 h-min
        w-[350px] sm:w-[500px] md:w-[650px] lg:w-[225px] xl:w-[300px] 2xl:w-[350px]'
      >
        <span className='flex justify-center font-semibold text-lg border-b border-1 border-b-slate-400'>Numbers</span>
        <p className='break-all min-h-[50px]'>{numbers}</p>
      </div>
    </>
  );
};
