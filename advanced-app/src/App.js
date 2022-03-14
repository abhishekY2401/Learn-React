import "./App.css";
import ErrorUseState from "./components/ErrorUseState";
import UseState from "./components/UseState";
import UseStateArray from "./components/useStateArray";
import UseStateObjects from "./components/useStateObjects";

function App() {
  return (
    <div className="App">
      <h1>This is Advanced React Concepts</h1>
      <ErrorUseState />
      <UseState />
      <UseStateArray />
      <UseStateObjects />
    </div>
  );
}

export default App;
