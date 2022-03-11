import { useState, useEffect } from "react";
import styled from "styled-components";
import Btn from "./Button";
import TodoList from "./TodoList";

const AppWrapper = styled.div`
  background-color: black;
`;

const Container = styled.div`
  width: 100%;
  height: 200px;
  margin: auto;
  text-align: center;
  background-color: #56bbf1;
  position: absolute;
  top: 0;
  left: 0;
`;

const Heading = styled.h2`
  color: #f2fa5a;
  padding: 50px;
  font-size: 40px;
`;

const Input = styled.input`
  width: 500px;
  height: 40px;
  border-radius: 10px;
  border: 2px solid #4d77ff;
  color: #4d77ff;
`;

const ContainerList = styled.div`
  width: 100%;
  margin: auto;
  position: absolute;
  top: 250px;
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
  color: #4d77ff;
`;

function App() {
  const [text, setText] = useState(""); //input
  const [items, setItems] = useState([]); //todo array
  // const [completed, setCompleted] = useState(false); //status of each task
  const [disabled, setDisabled] = useState(true); //button

  // Run once when app starts to get todos in local storage
  useEffect(() => {
    if (localStorage.getItem("items") === null) {
      localStorage.setItem("items", JSON.stringify([]));
    } else {
      let todosLocal = JSON.parse(localStorage.getItem("items"));
      setItems(todosLocal);
    }
  }, []);

  // Save local todos when todos state changes
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const handleTextChange = (e) => {
    setText(e.target.value);
    console.log(text);
    setDisabled(false);
  };

  const handleAddItem = (e) => {
    e.preventDefault();
    setItems([...items, text]);
    setText("");
    setDisabled(true);
  };

  //filter btns:

  const handleShowAll = () => {
    console.log("show all");
  };

  const handleShowActive = () => {
    console.log("show active");
  };

  const handleShowCompleted = () => {
    console.log("show completed");
  };

  const handleRemoveAllCompleted = () => {
    console.log("remove all completed");
  };

  const handleRemoveAll = (e) => {
    e.preventDefault();
    setItems([]);
  };

  //actions with todos:

  const handleDeleteItem = (item) => {
    //     const taskDeleted = item;
    //
    //     let updatedItems = items.filter((item) => {
    //       return item !== taskDeleted;
    //     });
    //
    //     setItems(updatedItems);

    console.log("delete item");
  };

  const markItemCompleted = () => {
    console.log("mark completed item");
  };

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
          <Btn buttonClick={handleShowAll} buttonInner="All" />
          <Btn buttonClick={handleShowActive} buttonInner="Active" />
          <Btn buttonClick={handleShowCompleted} buttonInner="Completed" />
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
          />
        </ContainerTodos>
      </ContainerList>
    </AppWrapper>
  );
}

export default App;
