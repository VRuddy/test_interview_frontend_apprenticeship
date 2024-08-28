import "./App.css";
import Counter from "./components/Counter";
import Greeting from "./components/Greeting";
import NamesList from "./components/NamesList";

function App() {
  const names = ["Alice", "Bob", "Charlie", "David"];
  return (
    <>
      <h1>Test technique</h1>

      <h2>Greeting component</h2>
      <Greeting name={"Check"} />

      <h2>Counter component</h2>
      <Counter />

      <h2>NamesList component</h2>
      <NamesList names={names} />
    </>
  );
}

export default App;
