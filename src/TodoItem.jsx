import styled from "styled-components";

const List = styled.li`
  margin: 20px;

  p {
    color: white;
    font-size: 20px;
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
    <List key={index} onClick={onItemCompleted}>
      <p key={item} onClick={onDeleteItem}>
        {item}

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
