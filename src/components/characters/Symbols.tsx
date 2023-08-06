import { useStore } from "../../store/useStore.ts";

export const Symbols = () => {
  const [symbols] = useStore((state) => [state.symbols]);

  return (
    <>
      <div className='w-60 bg-red-800 rounded-xl p-3 h-min'>
        <span className='flex justify-center font-semibold text-lg'>Symbols</span>
        <p className='break-words'>{symbols}</p>
      </div>
    </>
  );
};
