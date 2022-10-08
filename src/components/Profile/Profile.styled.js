import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f3f6f9;
  border-radius: 8px;
  box-shadow: 0px 10px 20px -10px rgba(0, 0, 0, 0.75);
  color: black;
  padding-top: 30px;
  position: relative;
  width: 350px;
  max-width: 100%;
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Image = styled.img`
  border: 1px solid #03bfcb;
  border-radius: 50%;
  padding: 7px;
`;

export const Stats = styled.ul`
  background-color: #878a8e;
  padding: 15px;
  display: flex;
  justify-content: space-evenly;
  margin-top: 30px;
  list-style: none;
  border-radius: 0 0 8px 8px;
`;

export const StatsItem = styled.li`
  display: inline-block;
  font-size: 14px;
  padding: 7px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 20px;
`;
