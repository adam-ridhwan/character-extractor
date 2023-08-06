import "./App.css";
import { Input } from "./components/Input.tsx";
import { Consonants } from "./components/characters/Consonants.tsx";
import { Vowels } from "./components/characters/Vowels.tsx";
import { Symbols } from "./components/characters/Symbols.tsx";

function App() {
  return (
    <>
      <div className='flex flex-col gap-3 p-16 w-[1400px]'>
        <Input />
        <div className='flex justify-between outline outline-3 outline-sky-blue'>
          <Consonants />
          <Vowels />
          <Symbols />
        </div>
      </div>
    </>
  );
}

export default App;
