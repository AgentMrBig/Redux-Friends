import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import FriendForm from './FriendForm'
import { getFriends, addFriend } from '../actions'

const FriendStyled = styled.div`
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

const H1 = styled.h1`
    text-align: center;
`

const Friends = (props) => {
    useEffect(() => {
        props.getFriends()
    }, [])

    return (
        <div>
            <H1>React Friends</H1>
            <FriendForm addFriend={props.addFriend} />
            {props.friends.map(friend => (
                <FriendStyled key={friend.id}>
                    <p><strong>Name: </strong>{friend.name}</p>
                    <p><strong>Age: </strong>{friend.age}</p>
                    <p><strong>Email: </strong>{friend.email}</p>
                </FriendStyled>
            ))}
        </div>
    )
}

const mapStateToProps = state => ({
    friends: state.friends,
})

export default connect(
    mapStateToProps,
    { getFriends, addFriend }
)(Friends)