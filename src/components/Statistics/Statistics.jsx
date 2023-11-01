import { StatisticsText } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul>
    <StatisticsText>Good: {good}</StatisticsText>
    <StatisticsText>Neutral: {neutral}</StatisticsText>
    <StatisticsText>Bad: {bad}</StatisticsText>
    <StatisticsText>Total: {total}</StatisticsText>
    <StatisticsText>Positive feedback: {positivePercentage}%</StatisticsText>
  </ul>
);
