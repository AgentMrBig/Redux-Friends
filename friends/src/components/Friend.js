import React from "react";
import styled from 'styled-components';

const LI = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  margin: 5px;
  padding: 10px;
  height: 50px;
  width: 100%;
  border-radius: 5px;
  
  background: #1f4037;  /* fallback for old browsers */
  `


const Friend = props => {
    return <LI>{props.Friend.name}</LI>;
};

export default Friend;