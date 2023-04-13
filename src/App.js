import "./App.css";
import { useState } from "react";
import "./App.css";
import { Movies } from "./Array";
import { Header } from "./Components/Header.jsx";
import { Button } from "./Components/UI/Button";
import { Modalka } from "./Components/Inputs/Modalka";

function App() {
  const [todos, setTodo] = useState(Movies);
  const [state, setState] = useState(false);

  const addToDoHandler = (data) => {
    const datta = [...todos, data];
    setTodo(datta);
  };

  function openModal() {
    setState((prev) => !prev);
  }
  function deleteCard(id) {
    const newData = todos.filter((el) => el.id !== id);

    setTodo(newData);
    console.log(todos, "data");
  }
  return (
    <div className="App">
      <div>
        {state ? (
          <Modalka onClick={openModal} addToDoHandler={addToDoHandler} />
        ) : null}
      </div>

      <Header openModal={openModal} />

      {todos.map((item) => {
        return (
          <div key={item.id}>
            <div className="container">
              <img src={item.img} className="image" />
              <section>
                <h2>{item.title}</h2>
                <div className="ButtonContainer">
                  <h3 className="rating">{item.rating}/5Rating</h3>

                  <Button
                    className="button"
                    bgcolor={"#ff0000"}
                    data={todos}
                    onClick={() => deleteCard(item.id)}
                  >
                    DELETE
                  </Button>
                  <Button bgcolor={"blue"} className={"button"}>
                    EDIT
                  </Button>
                </div>
              </section>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
