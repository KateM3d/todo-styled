import styled from "styled-components";

const List = styled.li`
  margin: 20px;
`;

const Icon = styled.img`
  margin-left: 15px;
`;
const True = styled.span`
  color: red;
  text-decoration: line-through;
`;

const False = styled.span`
  text-decoration: none;
`;

export default function TodoItem({
  index,
  item,
  onDeleteItem,
  onItemCompleted,
}) {
  return (
    <List key={index}>
      {item.status ? (
        <True>
          <span key={item.title} onClick={() => onItemCompleted(item)}>
            {item.title}
          </span>
          <Icon
            onClick={() => onDeleteItem(item)}
            src="https://img.icons8.com/color/48/000000/delete-forever.png"
            alt="delete"
            width="20px"
          />
        </True>
      ) : (
        <False>
          <span key={item.title} onClick={() => onItemCompleted(item)}>
            {item.title}
          </span>
          <Icon
            onClick={() => onDeleteItem(item)}
            src="https://img.icons8.com/color/48/000000/delete-forever.png"
            alt="delete"
            width="20px"
          />
        </False>
      )}
    </List>
  );
}
