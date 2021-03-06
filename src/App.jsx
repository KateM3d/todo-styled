import { useState, useEffect } from "react";
import styled from "styled-components";
import Btn from "./Button";
import TodoList from "./TodoList";
import "./App.css";

const AppWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: #151d3b;
  height: 100%;
`;

const Container = styled.div`
  width: 100%;
  height: 100px;
  margin: auto;
  text-align: center;
  background-color: #56bbf1;
  position: absolute;
  top: 0;
  left: 0;
`;

const Heading = styled.h2`
  color: #f2fa5a;
  padding: 5px;
  font-size: 40px;
`;

const Input = styled.input`
  padding-left: 20px;
  margin-top: 40px;
  width: 500px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #4d77ff;
  color: #4d77ff;
`;

const ContainerList = styled.div`
  width: 100%;
  margin: auto;
  // position: absolute;
  margin-top: 250px;
  text-align: center;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerTodos = styled.div`
  display: flex;
  justify-content: center;
  width: 650px;
  margin: auto;
  text-align: left;
  color: white;
  font-size: 20px;
`;

function App() {
  const [text, setText] = useState(""); //input
  const [items, setItems] = useState([]); //todo array
  const [status, setStatus] = useState(false); //status of each task
  const [disabled, setDisabled] = useState(true); //button
  const [filtered, setFiltered] = useState(items);

  // Run once when app starts to get todos in local storage
  useEffect(() => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("items"));
      setItems(todosLocal);
      setFiltered(todosLocal);
    }
  }, []);

  // Save local todos when todos state changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(filtered));
  }, [items, filtered]);

  useEffect(() => {
    setFiltered(items);
  }, [items]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    setDisabled(false);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    if (text === "") {
      alert("Please enter task");
    } else {
      setItems([
        { id: Math.random() * 1000, title: text, status: status },
        ...items,
      ]);
      setText("");
      setDisabled(true);
    }
    console.log(filtered);
  };

  //filter btns:

  const todoFilter = (currentStatus) => {
    if (currentStatus === "all") {
      setFiltered(items);
    } else {
      let filteredTodo = [...items].filter(
        (item) => item.status === currentStatus
      );
      setFiltered(filteredTodo);
    }
  };

  const handleRemoveAllCompleted = () => {
    let completedItems = items.filter((item) => item.status !== true);
    setItems(completedItems);
    console.log("remove all completed");
  };

  const handleRemoveAll = (e) => {
    e.preventDefault();
    setItems([]);
  };

  //actions with todos:

  const handleDeleteItem = (item) => {
    const taskDeleted = item;
    let updatedItems = items.filter((item) => {
      return item !== taskDeleted;
    });
    setItems(updatedItems);
    console.log("delete item");
  };

  const markItemCompleted = (item) => {
    let updatedItems = items.map((el) => {
      if (el.id === item.id) {
        return { ...el, status: !el.status };
      }
      return el;
    });
    setItems(updatedItems);
  };
  console.log(filtered);

  return (
    <AppWrapper>
      <Container>
        <Heading>TODO</Heading>
      </Container>
      <ContainerList>
        <Input type="text" onChange={handleTextChange} value={text} />
        <Btn
          buttonClick={handleAddItem}
          buttonInner={"Add #" + (items.length + 1)}
          disabled={disabled}
        />
        <ContainerBtn>
          <Btn buttonClick={() => todoFilter("all")} buttonInner="All" />
          <Btn buttonClick={() => todoFilter(false)} buttonInner="Active" />
          <Btn buttonClick={() => todoFilter(true)} buttonInner="Completed" />
          <Btn
            buttonClick={handleRemoveAllCompleted}
            buttonInner="Remove All Completed"
          />
          <Btn buttonClick={handleRemoveAll} buttonInner="Remove All" />
        </ContainerBtn>
        <ContainerTodos>
          <TodoList
            items={items}
            onItemCompleted={markItemCompleted}
            onDeleteItem={handleDeleteItem}
            filtered={filtered}
            setFiltered={setFiltered}
          />
        </ContainerTodos>
      </ContainerList>
    </AppWrapper>
  );
}

export default App;
