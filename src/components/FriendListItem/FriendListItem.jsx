import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={css.card}>
      <img src={avatar} alt={name} className={css.avatar} />
      <p className={css.name}>{name}</p>
      <p className={`${css.status} ${isOnline ? css.online : css.offline}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
