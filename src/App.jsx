import { useState } from "react";
import { useTodoStore } from "./store/Todo";
import "./App.css";

function App() {
  const [item, setItem] = useState("");
  const addTodo = useTodoStore((state) => state.addTodo);
  const removeTodo = useTodoStore((state) => state.removeTodo);
  const todos = useTodoStore((state) => state.todos);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const handleAddTodo = () => {
    if (item === "") return;
    addTodo({
      id: new Date().getTime(),
      content: "👉 " + item,
      completed: false,
    });
    setItem("");
  };
  const handleRemoveItem = (id) => {
    removeTodo(id);
  };
  const handleToggleTodo = (id) => {
    toggleTodo(id);
  };
  console.log(todos);
  // adding todo on enter
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };
  return (
    <>
      <div className="">
        <div className="max-w-3xl mx-auto h-screen border-x overflow-y-auto border-accent relative">
          <div className="p-6 sticky top-0 border-b border-accent bg-primary">
            <h2 className="text-heading font-serif text-4xl font-semibold">
              What needs to be done
              <span className="text-accent">🤔</span>
            </h2>
          </div>
          <div className="">
            <div className="">
              {todos.map((todo, idx) => {
                return (
                  <div
                    key={idx}
                    className="p-6 border-y border-accent flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <input
                        value={todo.completed}
                        type="checkbox"
                        onChange={() => handleToggleTodo(todo.id)}
                        className="
                        border-accent border-2 mr-4
                        w-4 bg-gray-400 h-4"
                      />
                      <p
                        className={`${
                          todo.completed
                            ? "line-through text-neutral-400"
                            : "text-para"
                        }`}
                      >
                        {todo.content}
                      </p>
                    </div>
                    <button
                      onClick={() => handleRemoveItem(todo.id)}
                      className="bg-accent flex items-center gap-2 whitespace-nowrap text-para px-4 py-2 rounded ml-4"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                        />
                      </svg>
                      Remove
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          {/* Fixed bar at the bottom */}
          <div className="sticky bg-primary border-t border-accent shadow-sm bottom-0 flex items-center right-0 overflow-x-hidden left-0  p-4">
            <input
              onChange={(e) => setItem(e.target.value)}
              value={item}
              type="text"
              onKeyDown={handleKeyDown}
              className="px-4 rounded border-accent border bg-transparent text-para outline-none py-2 w-full"
            />
            <button
              onClick={handleAddTodo}
              className="bg-accent flex items-center gap-2 whitespace-nowrap text-para px-4 py-2 rounded ml-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Add Item
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
