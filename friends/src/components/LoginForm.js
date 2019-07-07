import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../actions'
import styled from 'styled-components';

const LoginFromStyled = styled.form`
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
  width: 100px;
  border-radius: 5px;

`

const Label = styled.label`
  width: 350px;
  display: inline-block;
  text-align: right;
`

const H1 = styled.h1`
    text-align: center;
`

const LoginForm = (props) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async e => {
        e.preventDefault()
        await props.login({ username, password })
        await props.history.push('/')
    }

    return (
        <div>
            <H1>React Friends</H1>
            <LoginFromStyled onSubmit={e => handleSubmit(e)}>
                <Label>
                    Username:{` `}
                    <Input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        placeholder="Username"
                    />
                </Label>
                <Label>
                    Password:{` `}
                    <Input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </Label>
                <Button type="submit" value="Sign In">Sign In</Button>
            </LoginFromStyled>
        </div>
    )
}

export default connect(null, { login })(LoginForm)