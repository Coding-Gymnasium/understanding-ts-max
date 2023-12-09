import React from "react";

const TodoList: React.FC = (props: {}) => {
  const todos = [{ id: "t1", text: "Finish the course" }];
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
