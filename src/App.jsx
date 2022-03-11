import styled from "styled-components";

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

const ContainerList = styled.div`
  width: 100%;
  margin: auto;
  position: absolute;
  top: 250px;
  text-align: center;
`;

function App() {
  return (
    <>
      <Container>
        <Heading>TODO</Heading>
      </Container>
      <ContainerList>
        <input type="text" />
      </ContainerList>
    </>
  );
}

export default App;
