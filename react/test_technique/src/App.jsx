import './App.css'
import Counter from './components/Counter'
import Greeting from './components/Greeting'
import NamesList from './components/NamesList'

function App() {
  const names = ['Alice', 'Bob', 'Charlie', 'David'];
  return (
    <>
      <h1>Test technique</h1>
      <Greeting name={"Check"}/>
      <Counter/>
      <NamesList names={names}/>
    </>
  )
}

export default App
