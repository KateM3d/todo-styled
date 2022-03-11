export default function TodoItem(props) {
  return (
    <li key={props.index} onClick={props.onItemCompleted}>
      <span key={props.item} onClick={props.onDeleteItem}>
        {props.item}
      </span>
      <img
        onClick={() => props.onDeleteItem(props.item)}
        src="https://img.icons8.com/color/48/000000/delete-forever.png"
        alt="delete"
        width="20px"
      />
    </li>
  );
}
