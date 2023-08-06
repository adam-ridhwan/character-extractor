import "./App.css";
import { Input } from "./components/Input.tsx";
import { Consonants } from "./components/characters/Consonants.tsx";
import { Vowels } from "./components/characters/Vowels.tsx";
import { Symbols } from "./components/characters/Symbols.tsx";
import { Numbers } from "./components/characters/Numbers.tsx";

function App() {
  return (
    <>
      <div className='flex flex-col gap-5 p-16 w-full md:w-[900px] l:w-[1000px] xl:w-[1200px] 2xl:w-[1400px]'>
        <Input />
        <div className='flex justify-between gap-x-8 mt-10'>
          <Consonants />
          <Vowels />
          <Symbols />
          <Numbers />
        </div>
      </div>
    </>
  );
}

export default App;
