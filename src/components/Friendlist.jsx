import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem.jsx";

const FriendList = ({ friends }) => (
  <ul className="friend-list">
    <FriendListItem friends={friends} />
  </ul>
);

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
