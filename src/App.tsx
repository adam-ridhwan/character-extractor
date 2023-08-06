import "./App.css";
import { TextInput } from "./components/TextInput.tsx";
import { TextOutput } from "./components/TextOutput.tsx";

function App() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <TextInput />
        <TextOutput />
      </div>
    </>
  );
}

export default App;
