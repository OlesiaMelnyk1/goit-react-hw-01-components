import PropTypes from 'prop-types';
import {
  StatsBox,
  StatsTitle,
  StatList,
  StatItem,
  Label,
  Percentage,
} from './Statistics.styled';

export function Statistics({ title, stats }) {
  return (
    <StatsBox>
      {title && <StatsTitle>{title}</StatsTitle>}

      <StatList>
        {stats.map(stat => {
          return (
            <StatItem key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage}%</Percentage>
            </StatItem>
          );
        })}
      </StatList>
    </StatsBox>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
