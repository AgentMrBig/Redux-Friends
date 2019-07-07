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
    props.addFriend({ name, age, email })
    clearForm()
  }

  return (
    <AddFriendForm onSubmit={handleSubmit}>
      <Label>
        Name:{` `}
        <Input
          type="text"
          placeholder="Jane Smith"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Label>
      <Label>
        Age:{` `}
        <Input
          type="number"
          placeholder="23"
          value={age}
          onChange={e => setAge(e.target.value)}
        />
      </Label>
      <Label>
        Email:{` `}
        <Input
          type="email"
          placeholder="jane.smith@example.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Label>
      <Button type="submit" value="Add Friend">Add Friend</Button>
    </AddFriendForm>
  )
}

export default FriendForm