import React from 'react';

import PropTypes from 'prop-types';
import {
  StatWrapper,
  StatTitle,
  StatList,
  StatItem,
  StatText,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatWrapper>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <span>{stat.label}</span>
              <StatText>{stat.percentage}%</StatText>
            </StatItem>
          );
        })}
      </StatList>
    </StatWrapper>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
