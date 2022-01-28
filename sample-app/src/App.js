import Todo from "./Todo";


function App() {
  return (
    <div className="container">
      <h1>My Todos</h1>
      <div className="cards">
        <Todo title="Learn React" />
        <Todo title="Learn Operating System" />
        <Todo title="Learn Computer Networks" />
        <Todo title="Learn Computer Architecture" />
      </div>
    </div>
  );
}

export default App;
