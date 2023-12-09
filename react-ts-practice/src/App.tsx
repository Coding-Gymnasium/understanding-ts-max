import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoList items={todos} />
    </div>
  );
};

export default App;
