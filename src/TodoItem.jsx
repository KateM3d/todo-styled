import styled from "styled-components";

const List = styled.li`
  margin: 20px;
  p {
    color: white;
    font-size: 20px;
    text-decoration: ${(completed) => completed === true && "line-through"};
    text-decoration-color: red;
  }
`;

const Icon = styled.img`
  margin-left: 15px;
`;

export default function TodoItem({
  index,
  item,
  onDeleteItem,
  onItemCompleted,
}) {
  return (
    <List key={index}>
      <p key={item.title} onClick={onItemCompleted}>
        {item.title}

        <Icon
          onClick={() => onDeleteItem(item)}
          src="https://img.icons8.com/color/48/000000/delete-forever.png"
          alt="delete"
          width="20px"
        />
      </p>
    </List>
  );
}
