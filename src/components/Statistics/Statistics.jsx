import PropTypes from 'prop-types';
import StatisticsItem from './Statistics-item';
import styles from './Statistics.module.css';

const Statistics = ({ title, statistics }) =>
    !!title && (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <ul className={styles.statList}>
                <StatisticsItem stats={statistics} />
            </ul>
        </section>
    );

export default Statistics;

Statistics.propTypes = {
    title: PropTypes.string,
};
