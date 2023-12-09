import NewTodo from "./components/NewTodo";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <NewTodo onAddTodo={todoAddHandler} />
      <TodoList items={todos} />
    </div>
  );
};

export default App;
