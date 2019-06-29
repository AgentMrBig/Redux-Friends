import React from "react";
import styled from 'styled-components';
import Friend from './Friend';


const FriendsList = props => {
    return (
        <ul>
            {props.Friend.map(Friend => {
                return <Friend key={Friend.name} character={Friend} />;
            })}
        </ul>
    );
};

export default FriendsList;