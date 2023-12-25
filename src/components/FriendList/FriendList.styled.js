import styled from "styled-components";
export  const UlkaFriends = styled.ul`
width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 2px solid black; */
  margin: auto;
`

export const Lifriends = styled.li`
width: 50%;
padding-left: 5px;
padding-top: 5px;
padding-bottom: 5px;
padding-right: 35px;
  display: flex;
  flex-direction:row;
  justify-content: center;
  align-items: center;
  list-style: none;
  border: 2px solid black;
  margin: 10px;
`
export const SpanCheck = styled.span`
border-radius: 50%;
padding: 10px;
background-color: ${({isOnline})=> isOnline ? "green" : "red"};
  width: 20;
 height: 20;
`