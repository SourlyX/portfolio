import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: none;
  color: #75E4D7;
  width: 100%;
  border: 1px solid;
  border-radius: 50px;
  height: 1.5rem;
  font-size: 1rem;
  overflow: hidden;
`

const List = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  transition: all .4s;
`

const ListItem = styled.li`
  display: block;
  transform: translatey(18px);
  transition: all .3s;
  
  &:hover{
    transform: translatey(-18px);
    cursor: pointer;
    padding: 0 1.5rem;
  }
  
  &:hover a{
    transform: translatey(15px);
    color: #E61C4D;
  }

  &:before{
    content: attr(label);
    display: block;
    transform: translatey(-1rem);
    opacity: 1;
  }
`

const Link = styled.a`
  color: #E61C4D;
  text-decoration: none;
  padding: 10px;
  margin: -10px;
  background-color: #E3D18A;
  border-radius: 50%;
`

function Navbar({ items }){
  return (
    <Nav>
      <List>
        {items.map((item, index) => (
          <ListItem label={item.label} key={index}>
            <Link href={item.url}>{item.label}</Link>
          </ListItem>
        ))}
      </List>
    </Nav>
  )
}

export default Navbar