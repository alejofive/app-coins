import styled from 'styled-components/native';

export const Container = styled.View`
  width: 375px;
  margin: auto;
  border: 1px solid red;
  
`;

export const Raya = styled.View`
  width: 100%;
  height: 5px;
  background: #C2CFE0;
  margin: 10px 0;
`;

export const Raya2 = styled.View`
  width: 10%;
  height: 5px;
  background: #00AD50;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Circle = styled.View`
  width: 22px;
  height: 22px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background:#00AD50;
  position: absolute;
  right: 0;
`;

export const CircleNumber = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Poppins';
`;

export const Section = styled.View`
  padding: 20px;
`;

export const BoxPurple = styled.View`
  background: #44499C;
  border-radius: 4px;
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
`;

export const Title = styled.Text`
  color: white;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Poppins';
`;

export const BoxMini = styled.View`
  background: #D9F0FA;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 5px;
`;

export const BoxMini2 = styled.View`
  background: #D9F0FA;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  padding: 5px;
  justify-content: space-between;
`;

export const BoxMiniTextTitle = styled.View`
  color: white;
  font-size: 12px;
  font-weight: bold;
  font-family: 'Poppins';
  color: #2E3639;
  margin-right:5px ;
`;

export const BoxMiniText = styled.View`
  color: white;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Poppins';
  color: #2E3639;
`;

export const View = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BoxInput = styled.View`
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
`;

export const BoxIcon = styled.View`
  position: absolute;
  left: 10px;
`;

export const BoxIcon2 = styled.View`
  position: absolute;
  right: 10px;
`;

export const TextInput = styled.TextInput`
    background: #FFFFFF;
  border: 1px solid #43B6E6;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px 40px;
  margin: 5px 0;
  color: #263238;
  font-size: 16px;
  font-weight: 400;
  font-family: 'Poppins';
  width: 100%;
`;

export const TextInput2 = styled.TextInput`
  background: rgba(84, 88, 90, 0.1);
  border: 1px solid rgba(152, 164, 174, 0.4);
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
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

export const Boton = styled.TouchableOpacity`
  background: #41b5e69b;
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



