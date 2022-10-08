import styled from 'styled-components';

export const randomColor = () => {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
};

export const StatWrapper = styled.section`
  margin: 0 auto;
`;

export const StatTitle = styled.h2`
  text-align: center;
`;

export const StatList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const StatItem = styled.li`
  width: 30px;
  background-color: ${randomColor};
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StatText = styled.span`
  margin-top: 7px;
  font-size: 20px;
  font-weight: 700;
`;
