const User = ({ name, username, avatar_url }) => {
  return (
    <li>
      <p>{name}</p>
      <p>{username}</p>
      <div>
        <img src={avatar_url} alt="user avatar" />
      </div>
    </li>
  );
};

export default User;
