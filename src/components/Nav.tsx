import styled from "styled-components";

const Nav = () => {
  const Main = styled.div`
    background-color: #f6f6f6;
    color: black;
    width: 15%;
    padding-top: 2%;
    padding-left: 5%;
    padding-right: 5%;
    height: 400vh;
    position: fixed;
  `;
  const Title = styled.h1`
    line-height: 27px;
  `;
  const List = styled.ul`
    margin-top: 10%;
  `;

  const ListItem = styled.li``;
  const Clickable = styled.a`
    text-decoration: none;
    color: black;
    font-weight: 200;
    &:hover {
      color: #b73f3f;
    }
  `;

  return (
    <Main>
      <Title> Portfolio Dashboard</Title>
      <List>
        <ListItem>
          <Clickable href="#"> Home Page</Clickable>
        </ListItem>

        <ListItem>
          <Clickable href="#">Upload Projects</Clickable>
        </ListItem>

        <ListItem>
          <Clickable href="#">Skills </Clickable>
        </ListItem>

        <ListItem>
          <Clickable href="#">Contact </Clickable>
        </ListItem>
      </List>
    </Main>
  );
};
export default Nav;
