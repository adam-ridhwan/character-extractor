import "./App.css";
import { Input } from "./components/Input.tsx";
import { Consonants } from "./components/Consonants.tsx";
import { Vowels } from "./components/Vowels.tsx";

function App() {
  return (
    <>
      <div className='flex flex-col gap-3 p-16'>
        <Input />
        <Consonants />
        <Vowels />
      </div>
    </>
  );
}

export default App;
