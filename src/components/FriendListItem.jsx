import PropTypes from "prop-types";

const FriendListItem = ({ friends }) =>
  friends.map(({ avatar, name, isOnline, id }) => (
    <li className="item" key={id}>
      <span className="status">{isOnline ? "Online" : "Offline"}</span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className="name">{name}</p>
    </li>
  ));

export default FriendListItem;

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
