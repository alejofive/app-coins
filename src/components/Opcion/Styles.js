import styled from 'styled-components/native';

export const Container = styled.View`
  width: 375px;
  margin: auto;
  border: 1px solid red;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Boton = styled.TouchableOpacity`
  background: rgba(67, 182, 230, 0.4);
  border: 2px solid #43B6E6;
  box-sizing: border-box;
  border-radius: 10px;
  width: 312px;
  height: 47px; 
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding:0 10px;
`;

export const BotonText = styled.Text`
 font-family: Poppins;
 font-style: normal;
 font-weight: 600;
 font-size: 14px;
 color: #43B6E6;
`;

export const BoxText = styled.View`
  padding: 20px;
 
`;

export const ItemText = styled.View`
 display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Number = styled.Text`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 16px;
`;

export const Text = styled.Text`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
`;

export const BoxBoton = styled.View`
  width: 47px;
  height: 20px;
  border-radius: 34px;
  background: #2e36393d;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const BoxBoton2 = styled.View`
  width: 47px;
  height: 20px;
  border-radius: 34px;
  background: #43b6e63d;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const BtnCircle = styled.TouchableOpacity`
  background: #F1F1F1;
  width: 28px;
  height: 28px;
  border-radius: 100px;
  margin-left: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

export const BtnCircle2 = styled.TouchableOpacity`
  background: #43B6E6;
  width: 28px;
  height: 28px;
  border-radius: 100px;
  margin-right: -4px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.237602);
`;

export const TextBtn = styled.Text`
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 700;
  color: #000000DE;
`;

export const TextBtn2 = styled.Text`
  font-family: 'Poppins';
  font-size: 14px;
  font-weight: 700;
  color: #FFFFFF;
`;







