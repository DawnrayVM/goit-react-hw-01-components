import PropTypes from "prop-types";
import StatisticsItem from "./Statistics-item";

const Statistics = ({ title, statistics }) =>
  !!title && (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      <ul className="stat-list">
        <StatisticsItem stats={statistics} />
      </ul>
    </section>
  );

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
};
