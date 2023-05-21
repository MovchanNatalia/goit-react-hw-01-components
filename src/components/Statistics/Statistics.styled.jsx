import styled from '@emotion/styled';

export const Section = styled.section`
  width: 400px;
  border: 2px solid #696969;
  margin: 0 auto;
  padding: 0;
`;

export const Title = styled.h2`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  text-align: center;
  color: #696969;
  background-color: #ffe4c4;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 0;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 0;
  padding: 10px;
  text-align: center;
  color: #696969;
  width: 75px;
  background-color: #90ee90;
`;

export const Label = styled.span`
  font-size: 15px;
  margin-bottom: 8px;  
`;

export const Percentage = styled.span`
  font-size: 25px;
  font-weight: 600;
`;