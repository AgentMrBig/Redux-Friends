import React, { useState } from 'react'
import styled from 'styled-components';

const AddFriendForm = styled.form`
    padding: 32px 0;
    background: #fff;
    border-radius: 6px;
    /* height: 300px; */
    margin: 1rem auto;
    position: relative;
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
`

const Input = styled.input`
  height: 30px;
  border-radius: 5px;
  margin: 5px;
  margin-right: 40px;
  padding: 5px;
`

const Button = styled.button`
  margin-top: 20px;
  height: 30px;
  border-radius: 5px;

`

const Label = styled.label`
  width: 300px;
  display: inline-block;
  text-align: right;
`

const FriendForm = props => {
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [email, setEmail] = useState('')

  const clearForm = () => {
    setName('')
    setAge('')
    setEmail('')
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (validation()) {
      props.addFriend({ name, age, email })
      clearForm()
    }

  }

  // Name and Email validation Function.
  const validation = () => {
    var name = document.getElementById("name").value;
    var age = document.getElementById('age').value;
    var email = document.getElementById("email").value;
    var emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (name === '' || email === '') {
      alert("Please fill all fields...!!!!!!");
      return false;
    } else if (!(email).match(emailReg)) {
      alert("Invalid Email...!!!!!!");
      return false;
    } else if (isNaN(age) || age === '') {
      alert("Please use only numbers for age!");
      console.log('age is not a number!');
      return false;
    } else {
      return true;
    }
  }

  return (
    <AddFriendForm onSubmit={handleSubmit}>
      <Label>
        Name:{` `}
        <Input
          id="name"
          type="text"
          placeholder="Marcus Aurileus"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Label>
      <Label>
        Age:{` `}
        <Input
          id="age"
          type="number"
          placeholder="69"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </Label>
      <Label>
        Email:{` `}
        <Input
          id="email"
          type="email"
          placeholder="someemail@youremail.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Label>
      <Button type="submit" value="Add Friend">Add Friend</Button>
    </AddFriendForm>
  )
}

export default FriendForm