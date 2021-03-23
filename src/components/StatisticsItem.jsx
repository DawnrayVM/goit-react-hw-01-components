import PropTypes from "prop-types";

const StatisticsItem = ({ stats }) =>
  stats.map(({ id, label, percentage }) => (
    <li className="item" key={id}>
      <span className="label">{label}</span>
      <br />
      <span className="percentage">{percentage}%</span>
    </li>
  ));

export default StatisticsItem;

StatisticsItem.propTypes = {
  stats: PropTypes.array,
};
