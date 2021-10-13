import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'
import { BoxMini, BoxMini2, BoxMiniText, BoxMiniTextTitle, BoxPurple, Circle, CircleNumber, Container, Fecha, Fecha2, Raya, Raya2, Section, Title, View, TextInput, BoxIcon, BoxInput, BoxIcon2, TextInput2, Boton, BotonText } from './Styles'

const Request = () => {

  return (
    <Container>
      <Raya>
        <Raya2>
          <Circle>
            <CircleNumber>1</CircleNumber>
          </Circle>
        </Raya2>
      </Raya>

      <Section>
        <BoxPurple>
          <Title>SECCIÓN 1. Permiso de trabajo</Title>
        </BoxPurple>

        <BoxMini>
          <BoxMiniTextTitle>UNIDAD DE NEGOCIO:</BoxMiniTextTitle>
          <BoxMiniText>Mantenimiento Planta</BoxMiniText>
        </BoxMini>
        <BoxMini>
          <BoxMiniTextTitle>EMPRESA:</BoxMiniTextTitle>
          <BoxMiniText>Massy Energy</BoxMiniText>
        </BoxMini>
        <BoxMini2>
          <View>
            <BoxMiniTextTitle>FECHA INICIO:</BoxMiniTextTitle>
            <BoxMiniText>18/02/2021</BoxMiniText>
          </View>
          <View>
            <BoxMiniTextTitle>HORA:</BoxMiniTextTitle>
            <BoxMiniText>09:20 a.m.</BoxMiniText>
          </View>
        </BoxMini2>

        {/* 
        <Boton2>
          <Icon name='envelope' color='#98a4ae66' size={20} />
          <View>
            <Fecha2>Altura máxima de trabajo</Fecha2>
          </View>
          <Icon name='microphone' color='#98a4ae66' size={20} />
        </Boton2> */}



        <BoxInput>
          <BoxIcon>
            <Icon name='archive' color='#A4C8E1' size={20} />
          </BoxIcon>

          <TextInput placeholder="Escriba fecha fin dd/mm/aa" />

          <BoxIcon2>
            <Icon name='microphone' color='#A4C8E1' size={20} />
          </BoxIcon2>
        </BoxInput>

        <BoxInput>
          <BoxIcon>
            <Icon name='envelope' color='#A4C8E1' size={20} />
          </BoxIcon>

          <TextInput placeholder="Escriba la tarea a realizar" />

          <BoxIcon2>
            <Icon name='microphone' color='#A4C8E1' size={20} />
          </BoxIcon2>
        </BoxInput>

        <BoxInput>
          <BoxIcon>
            <Icon name='map-marker' color='#98a4ae66' size={20} />
          </BoxIcon>

          <TextInput2 placeholder="Escriba lugar de trabajo" />

          <BoxIcon2>
            <Icon name='microphone' color='#98a4ae66' size={20} />
          </BoxIcon2>
        </BoxInput>

        <BoxInput>
          <BoxIcon>
            <Icon name='map-marker' color='#98a4ae66' size={20} />
          </BoxIcon>

          <TextInput2 placeholder="Tipo de trabajo" />

          <BoxIcon2>
            <Icon name='microphone' color='#98a4ae66' size={20} />
          </BoxIcon2>
        </BoxInput>

        <BoxInput>
          <BoxIcon>
            <Icon name='map-marker' color='#98a4ae66' size={20} />
          </BoxIcon>

          <TextInput2 placeholder="Altura máxima de trabajo" />

          <BoxIcon2>
            <Icon name='microphone' color='#98a4ae66' size={20} />
          </BoxIcon2>
        </BoxInput>

        <Boton>
          <BotonText>GUARDAR Y CONTINUAR SECCIÓN 2</BotonText>
        </Boton>
      </Section>
    </Container>
  )
}

export default Request
