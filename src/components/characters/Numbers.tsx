import { useStore } from "../../store/useStore.ts";

export const Numbers = () => {
  const [numbers] = useStore((state) => [state.numbers]);

  return (
    <>
      <div className='w-60 bg-yellow-800 rounded-xl p-3 h-min'>
        <span className='flex justify-center font-semibold text-lg'>Numbers</span>
        <p className='break-words'>{numbers}</p>
      </div>
    </>
  );
};
