import "./App.css";
import { Input } from "./components/Input.tsx";
import { Consonants } from "./components/characters/Consonants.tsx";
import { Vowels } from "./components/characters/Vowels.tsx";
import { Symbols } from "./components/characters/Symbols.tsx";
import { Numbers } from "./components/characters/Numbers.tsx";

function App() {
  return (
    <>
      <div
        className='flex flex-col gap-5 pt-10 lg:pt-20
        w-[350px] sm:w-[500px] md:w-[650px] lg:w-[900px] xl:w-[1200px] 2xl:w-[1400px]'
      >
        <Input />
        <div className='flex justify-between flex-col lg:flex-row gap-8 mt-10'>
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
