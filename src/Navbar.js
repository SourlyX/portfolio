import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #333;
  color: #fff;
  width: 100%;
`

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: center;
  padding: 0;
`

const ListItem = styled.li`
  margin: 0 10px;
`

const Link = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 10px;

  &:hover {
    text-decoration: underline;
  }
`

function Navbar({ items }) {
  return (
    <Nav>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <Link href={item.url}>{item.label}</Link>
          </ListItem>
        ))}
      </List>
    </Nav>
  )
}

export default Navbar