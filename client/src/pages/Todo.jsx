import { useState, useEffect } from "react";
import axios from "axios";
import FormTodo from "../assets/components/FormTodo";
import Navbar from "../assets/components/Navbar";

const Todo = () => {
  const [todos, setTodos] = useState([]);

  // const [values, setValues] = useState({
  //   todos: [],
  //   completed: false,
  // });
  // const { todos, completed } = values;

  const editData = (title) => {
    axios
      .put(`http://localhost:8000/api/edit/${title}`)
      .then((result) => {
        console.log(result);
        location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dataItems = async () => {
    await axios
      .get("http://localhost:8000/api/list")
      .then((res) => {
        setTodos(res.data);
      })
      // .then((res) => {
      //   setValues({ ...values, todos: res.data });
      // })
      .catch((err) => {
        console.log(err);
      });
  };

  const removeData = async (title) => {
    try {
      await axios.delete(`http://localhost:8000/api/${title}`);
      console.log(`todo deleted : ${title}`);
      // setValues({
      //   ...values,
      //   todos: todos.filter((todo) => todo.title !== title),
      // });
      setTodos(todos.filter((todo) => todo.title !== title));
    } catch (error) {
      console.log(error);
    }
  };

  // const handleToggle = (id) => {
  //   setTodos((todos) =>
  //     todos.map((todo) =>
  //       todo.id === id ? { ...todo, complete: !todo.complete } : todo
  //     )
  //   );
  // };

  const deleteConfirm = (title) => {
    let answer = window.confirm(
      `Apakah anda yakin ingin menghapusnya ? ${title}`
    );

    answer && removeData(title);
  };

  useEffect(() => {
    dataItems();
  }, []);

  return (
    <div className="container h-full">
      <Navbar />
      <div className="px-4 py-6 flex justify-center items-center flex-col">
        <FormTodo />
        {todos.length === 0 ? (
          <h1>NO RECORD</h1>
        ) : (
          todos.map((todo) => (
            <div
              key={todo.id}
              onClick={() => editData(todo.title)}
              className={`${
                todo.done ? "line-through" : "none"
              } border text-start w-full flex justify-between items-center `}
            >
              <h1 className="py-2 px-4">{todo.title}</h1>
              <div className="w-1/6 flex justify-around items-center cursor-pointer">
                <button
                  className="w-6"
                  onClick={() => deleteConfirm(todo.title)}
                >
                  <svg
                    className="fill-current text-[#ff7171] hover:text-[#b7365d]"
                    clipRule="evenodd"
                    fillRule="evenodd"
                    strokeLinejoin="round"
                    strokeMiterlimit={2}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m20.015 6.506h-16v14.423c0 .591.448 1.071 1 1.071h14c.552 0 1-.48 1-1.071 0-3.905 0-14.423 0-14.423zm-5.75 2.494c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-4.5 0c.414 0 .75.336.75.75v8.5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-8.5c0-.414.336-.75.75-.75zm-.75-5v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-16.507c-.413 0-.747-.335-.747-.747s.334-.747.747-.747zm4.5 0v-.5h-3v.5z"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Todo;
