import {UlkaFriends,SpanCheck,Lifriends} from "./FriendList.styled"
const FriendList = ({datafriends})=>{
  console.log(datafriends);
  const elementsFreiendsList = datafriends.map(el=>
  <Lifriends key={el.id}>
  <SpanCheck isOnline={el.isOnline}></SpanCheck>
  <img class="avatar" src={el.avatar} alt="User avatar" width="48" style={{padding: 10}} />
  <p style={{padding:10}}>{el.name}</p>
</Lifriends>)
  return(
    <UlkaFriends>
 {elementsFreiendsList}
</UlkaFriends>
  )
}
export default FriendList