import styled from '@emotion/styled';

export const Card = styled.div`
  width: 300px;
  margin: 0 auto 20px;
  text-align: center;
  font-size: 14px;
  border-radius: 12px;
  background-color: #ffffff;
  outline: 1px solid #888888;
  overflow: hidden;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Description = styled.div`
  padding: 20px;
`;

export const Avatar = styled.img`
  width: 140px;
  margin: 0 auto;
  padding: 8px;
  border-radius: 50%;
  border: 1px solid #888888;
`;

export const Name = styled.p`
  margin: 24px 0 4px 0;
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin: 12px 0;
  color: #888888;
  font-size: 16px;
`;

export const Location = styled.p`
  margin: 12px 0;
  color: #888888;
  font-size: 16px;
`;

export const Stats = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: center;
  background-color: #e6e6e6;
`;

export const StatsItem = styled.li`
  width: 100px;
  padding: 24px 0;
  :not(:last-child) {
    border-right: 1px solid #888888;
  }
`;

export const Label = styled.span`
  display: block;
  font-size: 16px;
  color: #888888;
`;

export const Quantity = styled.span`
  display: block;
  margin: 4px 0 4px 0;
  font-size: 16px;
  font-weight: 700;
`;
