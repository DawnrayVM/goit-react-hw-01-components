import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem.jsx';
import styles from './Friendlist.module.css';

const FriendList = ({ friends }) => (
    <ul className={styles.friendlist}>
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
        }),
    ),
};
