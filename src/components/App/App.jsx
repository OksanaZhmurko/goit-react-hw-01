import { Profile } from '../Profile/Profile';
import { FriendList } from '../FriendList/FriendList';
import userData from '../../userData.json';
import friends from '../../friends.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from '../../transactions.json';


export const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};