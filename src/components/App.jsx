import Profile from "./Profile/Profile";
import data from "../components/Profile/user.json"
import arrayStats from "../components/Statistics/dataArray.json"
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import datafriends from "../components/FriendList/datafriends.json"
import TransactionHistory from "./TransactionHistory/TransactionHistory"
import transactions from "../components/TransactionHistory/transactions.json"
export const App = () => {
  return (
    <div>
      <Profile
  username={data.username}
  tag={data.tag}
  location={data.location}
  avatar={data.avatar}
  stats={data.stats}/>

<Statistics stats = {arrayStats} title = "Title of statictics"/>


<FriendList datafriends ={datafriends}/>


<TransactionHistory props ={transactions}/>
    </div>
  );
};
