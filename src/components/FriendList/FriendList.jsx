

//import clsx from "clsx";
import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
    {friends.map(({ isOnline, id, avatar, name }) => (
      <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
    ))}
    </ul>
  );
};

