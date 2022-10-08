import styled from 'styled-components';

export const StyledItem = styled.li`
  display: flex;
  margin-bottom: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 4px;
  width: 350px;
  padding: 5px;
`;

export const IsOnlineColor = styled.span`
  width: 10px;
  height: 10px;
  background-color: ${({ isOnline }) => (isOnline ? 'green' : 'red')};
  border-radius: 50%;
  align-self: center;
  margin-right: 7px;
`;

export const StyledList = styled.ul`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
