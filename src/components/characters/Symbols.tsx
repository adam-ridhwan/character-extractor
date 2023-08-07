import { useStore } from "../../store/useStore.ts";

export const Symbols = () => {
  const [symbols] = useStore((state) => [state.symbols]);

  return (
    <>
      <div
        className='bg-customGreen rounded-xl p-3 h-min border-2 border-green-900
        w-[350px] sm:w-[500px] md:w-[650px] lg:w-[225px] xl:w-[300px] 2xl:w-[350px]'
      >
        <span className='flex justify-center font-semibold text-lg border-b border-1 border-b-slate-400'>Symbols</span>
        <p className='break-all min-h-[50px]'>{symbols}</p>
      </div>
    </>
  );
};
