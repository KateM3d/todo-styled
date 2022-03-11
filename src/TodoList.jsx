import styled from "styled-components";
import TodoItem from "./TodoItem";

const Todos = styled.ul`
  width: 400px;
`;

export default function TodoList({
  items,
  filtered,
  onItemCompleted,
  onDeleteItem,
}) {
  return (
    <>
      <Todos>
        {filtered.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            onItemCompleted={onItemCompleted}
            onDeleteItem={onDeleteItem}
          />
        ))}
      </Todos>
    </>
  );
}
