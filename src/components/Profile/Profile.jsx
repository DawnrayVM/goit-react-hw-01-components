import PropTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, followers, views, likes }) => (
    <div className={styles.profile}>
        <div className={styles.description}>
            <img
                src={avatar}
                alt="Аватар пользователя"
                className={styles.avatar}
            />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>
        <ul className={styles.stats}>
            <li className={styles.statsItem}>
                <span className={styles.label}>Followers:</span>
                <span className={styles.quantity}>{followers}</span>
            </li>
            <li className={styles.statsItem}>
                <span className={styles.label}>Views:</span>
                <span className={styles.quantity}>{views}</span>
            </li>
            <li className={styles.statsItem}>
                <span className={styles.label}>Likes:</span>
                <span className={styles.quantity}>{likes}</span>
            </li>
        </ul>
    </div>
);
export default Profile;

Profile.defaultProps = {
    followers: 0,
    views: 0,
    likes: 0,
};

Profile.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
};
