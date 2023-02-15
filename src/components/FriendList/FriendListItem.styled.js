import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 12px;
  border-radius: 8px;
  border: 1px solid #888888;
  background-color: #ffffff;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const Status = styled.span`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: ${props => {
    return props.status ? 'green' : 'red';
  }};
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Avatar = styled.img`
  display: block;
  border: 1px solid #888888;
  border-radius: 4px;
  padding: 8px;
  transition: transform 250ms ease;
  &:hover {
    transform: scale(1.1);
  }
  cursor: pointer;
`;

export const Name = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
