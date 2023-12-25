import styled from 'styled-components';
export const Ulka = styled.ul`
display: flex;
justify-content: center;
    align-items: center;
    border: 2px solid black;
    width: 400px;
    padding: 0;
    margin: 0;
`
export const LIshka =styled.li`
width: 60px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  background-color:${props => props.somecolor};
 `
 export const Sextion= styled.div`
 display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  width:400px;
  margin: 100px;
 `