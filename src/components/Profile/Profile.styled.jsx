import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 50px;
  background-color: #87cefa;
  

`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  align-items: center;
  width: 350px;
  text-align: center;
  border: 3px solid #696969;
  background-color: #ffff00;
  
`;

export const Avatar = styled.img`
  display: block;
  margin-top: 20px;
  border: 2px solid #696969;
  width: 200px;
  background-color: #f5fffa;
  border-radius: 2px;
`;

export const Name = styled.p`
  margin-top: 20px;
  font-size: 28px;
  line-height: 1.62;
  font-weight: 700;
  color: #696969;
`;

export const Information = styled.p`
  margin-top: 8px;
  font-size: 20px;
  line-height: 1.58;
  font-weight: 600;
  color: #696969;
`;

export const BoxStats = styled.ul`
  display: flex;
  margin: 0 auto;
  padding: 0 30px;
  list-style-type: none;
  align-items: center;
  justify-content: center;
  width: 350px;

  border: 3px solid #696969;
  border-top: none;
  background-color: #90ee90;
`;

export const ListStats = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px;

  :not(:last-child) {
    border-right: 2px solid #696969;
  }
`;

export const Label = styled.span`
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 20px;
  line-height: 1.62;
  font-weight: 600;
  color: #808080;
`;

export const Quantity = styled.span`
  text-align: center;
  font-size: 28px;
  line-height: 1.62;
  font-weight: 700;
  color: #696969;
`;
