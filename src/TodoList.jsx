import styled from "styled-components";
import TodoItem from "./TodoItem";

const Todos = styled.ul`
  width: 400px;
`;

export default function TodoList(props) {
  return (
    <>
      <Todos>
        {props.items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            //   completed={item.done}
            onItemCompleted={props.onItemCompleted}
            onDeleteItem={props.onDeleteItem}
          />
        ))}
      </Todos>
    </>
  );
}
