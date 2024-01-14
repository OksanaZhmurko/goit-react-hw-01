export const FriendList = ({ friends: { name, avatar, active } }) => {
    return (
      <div>
        <img src={avatar} alt={name} width="180" height="180" />
        <h2>{name}</h2>
        <p>Status: {active ? 'Active' : 'Retired'}</p>
      </div>
    );
  };