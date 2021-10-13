import styled from 'styled-components/native';

export const Container = styled.View`
  width: 375px;
  margin: auto;
  border: 1px solid red;
`;

export const Box = styled.View`
  padding: 20px 30px;
  position: relative;
`;

export const Title = styled.Text`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
`;

export const MiniTitle = styled.Text`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  margin: 10px 0;
`;

export const Paragraph = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
`;

export const BoxFouter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BoxIcon = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const TextIcon = styled.View`
  margin-left: 5px;
  font-size: 'Poppins';
  font-weight: 600;
  font-size: 10px;
`;

export const Circle = styled.View`
  width: 3px;
  height: 3px;
  border-radius: 100px;
  background: #91919F;
`;

export const TextSpan = styled.Text`
  font-size: 'Poppins';
  font-weight: 400;
  font-size: 10px;
  color: #91919F;
`;

export const Linea = styled.Text`
  position: absolute;
  bottom: 0;
  left: 20px;
  width: 90%;
  height: 2px;
  background: #C2CFE0;
  margin-bottom:10px ;
`;

