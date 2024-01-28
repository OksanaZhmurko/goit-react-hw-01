
import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline })  => {

  const statusClasses = clsx(css.status, {
    [css.isOnline]: isOnline,
    [css.offline]: !isOnline,
  });

    return (
      <div className={css.item}>
        <img className={css.avatar} src={avatar} alt={name} width="48" />
        <p className={css.nameFriends}>{name}</p>
        <p className={statusClasses}>{isOnline ? 'Online' : 'Offline'}</p>
      </div>
    );
    };