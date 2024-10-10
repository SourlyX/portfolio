import React, { useState } from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Container = styled.div`
  background-color: #1E1E1E;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: max(100px, auto);
  padding: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
`
const Todo = styled.div`
  display: flex;
  flex-direction: row;
  wrap: no-wrap;
  width: 100%;
  border: 1px solid gray;
`

const Title = styled.h2`
  color: #55F5ED;
  margin-bottom: 30px;
`

const Text = styled.p`
  font-size:20px;
  width: 90%;
  padding: 0 5px 0 5px;
  text-align: center;
  text-decoration: ${({ active }) => (!active ? 'line-through' : 'none')};
`

const NewTodo = styled.div`
  margin-top: 30px;
  flex-direction: row;
  wrap: no-wrap;
`

const AddNew = styled.button`
  background-color: #55F5ED;
  color: #2C3E50;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;

  &:hover {
    background-color: #4AE5E0;
  }
`

const ToDoList = ({ todos, setTodos }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleClick = (index) => {
    setTodos((prevState) => 
      prevState.map((todo, i) => 
        i === index ? { ...todo, active: !todo.active } : todo
      )
    );
  };

  const addTodo = () => {
    if (newTodo.trim() === "") return;

    const newTask = {
      name: newTodo,
      active: true,
    };

    setTodos([...todos, newTask]);
    setNewTodo("");
  };

  return (
    <>
      <Container>
        <Title>To-Do List</Title>
        {todos.map((todo, index) => (
          <Todo key={index}>
            <input
              type="checkbox"
              checked={!todo.active}
              onClick={() => handleClick(index)}
              style={{ cursor: "pointer", margin: "0 10px 0 10px" }}
            />
            <Text active={todo.active}>{todo.name}</Text>
          </Todo>
        ))}
        <NewTodo>
          <input
            type="text"
            placeholder="New To-Do"
            style={{ height: "35px", borderRadius: "10px" }}
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <AddNew onClick={addTodo}>Add To-Do</AddNew>
        </NewTodo>
      </Container>
    </>
  );
};

export default ToDoList;
