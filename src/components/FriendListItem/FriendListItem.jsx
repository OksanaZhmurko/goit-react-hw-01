import './FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
    return (
      <div className="item">
        <img className="avatar" src={friend.avatar} alt="Avatar" width="48" />
        <p className="name">{friend.name}</p>
        <p className="status">{friend.isOnline ? 'Online' : 'Offline'}</p>
      </div>
    );
    };