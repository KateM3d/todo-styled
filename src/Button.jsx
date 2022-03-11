import styled from "styled-components";

const Button = styled.button`
  width: 100px;
  height: 40px;
  border: 2px solid #4d77ff;
  border-radius: 10px;
  color: #f2fa5a;
  background-color: #5ee6eb;
  margin: 10px;

  &:hover {
    cursor: pointer;
    background-color: #4d77ff;
  }
`;

export default function Btn({ buttonClick, buttonInner }) {
  return <Button onClick={buttonClick}>{buttonInner}</Button>;
}
