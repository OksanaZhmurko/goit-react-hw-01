
import { FriendListItem } from '../FriendListItem/FriendListItem';




export const FriendList = ({ friends }) => {
    return (
      <ul className={friends}>
        {friends.map((friend) => (
          <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    );
  };
  
 