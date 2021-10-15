import styled from 'styled-components/native';

export const Container = styled.View`
  width: 375px;
  margin: auto;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const View = styled.View`
  margin-top: 40px;
  padding: 10px;
  width: 100%;
`;


export const Linea = styled.View`
  width: 100%;
  height: 2px;
  border: 1px solid #00AD50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const BigCircle = styled.View`
  display: flex;
  align-items: center;
  align-items: center;
  flex-direction: column;
  margin-top: -20px;
`;

export const CajaCircle = styled.View`
  background: white;
  padding: 3px;
  border-radius: 100px;
`;

export const CircleText = styled.Text`
  font-family: 'Poppins';
  font-weight: 500;
  font-size: 12px;
  color: #2F3639;
`;

export const Circle = styled.View`
  width: 24px;
  height: 24px;
  background: #00AD50;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Section = styled.View`
  padding: 20px;
  width: 100%;
`;


export const Boxbig = styled.View`
  width: 100%;
  margin-bottom: 10px;
`;

export const BoxbigTetx = styled.View`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 12px;
  color: #2F3639;
  margin-left: 5px;
  margin-top: 5px;
`;

export const Box = styled.View`
  background: #D9F0FA;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
  position: relative;
`;

export const BoxText = styled.View`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 12px;
  color: #2F3639;
`;

export const BoxBoton = styled.TouchableOpacity`
  background: #43B6E6;
  width: 28px;
  height: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right:0 ;
`;

export const Boton = styled.TouchableOpacity`
  background: #43B6E6;
  box-sizing: border-box;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px 40px;
  margin: 5px 0;
  color: #98a4ae66 ;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins';
  width: 100%;
`;

export const BotonText = styled.Text`
  color: #ffff ;
  font-size: 14px;
  font-weight: 400;
  font-family: 'Poppins';
`;

