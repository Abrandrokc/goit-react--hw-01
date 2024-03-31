
import Profile from "./Profile/Profile";
import userData from "./Profile/profile.json";
import friends from "./FriendList/friends.json"
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import info from "./TransactionHistory/TransactionHistory.json"
export default function App() {
  return (
      
    <div>
      <Profile 
       username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      < FriendList friend={friends} />
      < TransactionHistory info = {info} />
    </div>
  );
 
}
