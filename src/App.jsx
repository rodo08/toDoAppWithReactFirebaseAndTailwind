import { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import ToDo from "./components/ToDo";
import { db } from "./firebase";
import {
  collection,
  query,
  onSnapshot,
  updateDoc,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const style = {
  bg: `h-screen w-screen p-4 bg-gradient-to-r from-[#adfbf3] to-[#e8f29d]`,
  container: `bg-slate-100 max-w-[500] w-full m-auto rounded-md shadow-xl p-4`,
  heading: `text-3xl font-bold text-center text-gray-800 p-2`,
  form: `flex justify-between`,
  input: `border p-2 w-full text-xl`,
  button: `border p-4 ml-2 bg-orange-500 text-slate-100`,
  count: `text-center p-2`,
};

const App = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  console.log("This console.log is here on purpose :)", input);
  //create
  const createTodo = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid to do");
      return;
    }
    await addDoc(collection(db, "todos"), {
      text: input,
      completed: false,
    });
    setInput("");
  };
  //read
  useEffect(() => {
    const q = query(collection(db, "todos"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let todosArr = [];
      querySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

  //update
  const toggleComplete = async (todo) => {
    await updateDoc(doc(db, "todos", todo.id), {
      completed: !todo.completed,
    });
  };

  //delete
  const deleteTodo = async (id) => {
    await deleteDoc(doc(db, "todos", id));
  };

  return (
    <div className={style.bg}>
      <div className={style.container}>
        <h3 className={style.heading}>
          ToDo app with React, Firebase & Tailwind
        </h3>
        <form onSubmit={createTodo} className={style.form}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={style.input}
            type="text"
            placeholder="Add a to Do"
          />
          <button className={style.button}>
            <AiOutlinePlus size={30} />
          </button>
        </form>
        <ul>
          {todos.map((todo, index) => (
            <ToDo
              key={index}
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))}
        </ul>
        {todos.length < 1 ? null : (
          <p className={style.count}>{`You have ${todos.length} to do`}</p>
        )}
      </div>
    </div>
  );
};

export default App;
