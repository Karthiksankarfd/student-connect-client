import React, { useReducer, useState } from "react";



const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO:"delete_todo"
};

const UseReducer = () => {
  function reducerfn(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducerfn, { count: 0 });

  return (
    <div>
      <button onClick={() => dispatch({ type: "decrement" })}>
        Incremwent
      </button>
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: "increment" })}>
        Incremwent
      </button>
    </div>
  );
};

const Todo = () => {
  const [todos, setTodos] = useState("");

  const reducerFn = (todoArray, action) => {
    switch (action.type) {
      case ACTIONS.ADD_TODO:
        return [...todoArray, newTodo(action.payload.name)];

      case ACTIONS.TOGGLE_TODO:
        return todoArray.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          }
          return todo;
        });
        case ACTIONS.DELETE_TODO:
          return todoArray.filter((todo) => todo.id !== action.payload.id);
          

      default:
        return todoArray;
    }
  };

  // function to return todo object
  const newTodo = (name) => {
    return { id: Date.now(), name: name, completed: false };
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: todos } });
    setTodos("");
  };
  const [todoArray, dispatch] = useReducer(reducerFn, []);
  console.log(todoArray);
  return (
    <>
      <form className="" onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todos}
          onChange={(e) => setTodos(e.target.value)}
        />
        <input type="submit" />
      </form>
      <div>
        {todoArray.map((todo) => {
          return <TodoList todoList={todo} key={todo.id} dispatch={dispatch} />;
        })}
      </div>
    </>
  );
};

const TodoList = ({ todoList, dispatch }) => {
  return (
    <div>
      <div
        key={todoList.id}
        className={`${todoList.completed ? "text-green-400" : "text-red-400"}`}
      >
        {todoList.name}
      </div>
      <button
        className="p-2 border-2 border-black mr-5"
        onClick={() => {
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todoList.id } });
        }}
      >
        Toggle
      </button>

      <button
        className="p-2 border-2 border-black mr-5"
        onClick={() => {
          dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id: todoList.id } });
        }}
      >
        Toggle
      </button>

      <button className="p-2 border-2 border-black mr-5"
       onClick={() => {
        dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todoList.id } });
      }}
      >Delete</button>
    </div>
  );
};

export { UseReducer, Todo };
