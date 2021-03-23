import React from "react";
import PropTypes from "prop-types";
import StatisticsItem from "../components/StatisticsItem";

const Statistics = ({ title, statistics }) => (
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
