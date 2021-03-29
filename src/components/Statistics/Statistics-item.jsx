import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const StatisticsItem = ({ stats }) =>
    stats.map(({ id, label, percentage }) => (
        <li className={styles.item} key={id}>
            <span className="label">{label} </span>
            <span className="percentage">{percentage}%</span>
        </li>
    ));

export default StatisticsItem;

StatisticsItem.propTypes = {
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        }),
    ).isRequired,
};
