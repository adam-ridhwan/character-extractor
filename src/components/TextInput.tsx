import { useStore } from "../store/useStore.ts";

export const TextInput = () => {
  const [text, updateText] = useStore((state) => [
    state.text,
    state.updateText,
  ]);

  return (
    <>
      <label htmlFor="sentence" className="flex flex-col">
        <span className="font-semibold">Enter a sentence: </span>
        <span className="italic text-xs">(This input removes vowels)</span>
      </label>
      <input
        type="text"
        id="sentence"
        value={text}
        className="rounded rounded-l-none focus:outline-none px-3 py-2"
        onChange={(e) => updateText(e.target.value)}
      />
    </>
  );
};
