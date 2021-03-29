import PropTypes from 'prop-types';
import styles from './Friendlist.module.css';

const FriendListItem = ({ friends }) =>
    friends.map(({ avatar, name, isOnline, id }) => (
        <li className={styles.item} key={id}>
            <span className={isOnline ? styles.online : styles.offline}></span>
            <img className={styles.avatar} src={avatar} alt="" width="48" />
            <p className={styles.name}>{name}</p>
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
        }),
    ),
};
