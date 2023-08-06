import { useStore } from "../store/useStore.ts";

export const Vowels = () => {
  const [vowels] = useStore((state) => [state.vowels]);

  return (
    <>
      <br />
      <div>
        {vowels && <span className='font-semibold'>Vowels:</span>}
        <p className='break-words'>{vowels}</p>
      </div>
    </>
  );
};
