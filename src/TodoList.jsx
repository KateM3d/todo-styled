import styled from "styled-components";
import TodoItem from "./TodoItem";

const Todos = styled.ul`
  width: 400px;
`;

export default function TodoList({
  items,
  completed,
  onItemCompleted,
  onDeleteItem,
}) {
  return (
    <>
      <Todos>
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            completed={completed}
            onItemCompleted={onItemCompleted}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </Todos>
    </>
  );
}
