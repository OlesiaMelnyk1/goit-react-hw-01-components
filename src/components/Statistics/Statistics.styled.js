import styled from '@emotion/styled';

export const StatsBox = styled.div`
  width: 300px;
  margin: 0 auto;
  background-color: #ffffff;
  border: 1px solid #888888;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const StatsTitle = styled.h2`
  margin: 24px 0;
  font-size: 16px;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StatItem = styled.li`
  width: 20%;
  padding: 12px;
  background-color: #60b9ce;
`;

export const Label = styled.span`
  display: block;
  font-size: 12px;
  color: #ffffff;
`;

export const Percentage = styled.span`
  display: block;
  margin-top: 4px;
  font-size: 16px;
  font-weight: 700;
  color: #fff;
`;
