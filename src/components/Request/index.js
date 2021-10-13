import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Box, BoxFouter, BoxIcon, Circle, Container, Linea, MiniTitle, Paragraph, TextIcon, TextSpan, Title } from './Styles'

const Request = () => {

  return (
    <Container>
      <Box>
        <Title>DÍA A DÍA</Title>
        <MiniTitle>Tarea:
          <Paragraph> Texto con descripción de la actividad puede ser
            con las 3 lineas de texto.</Paragraph>
        </MiniTitle>
        <BoxFouter>
          <BoxIcon>
            <Icon.Button name='star' />
            <TextIcon>PENDIENTE</TextIcon>
          </BoxIcon>
          <Circle />
          <TextSpan>Por Antonio Casil</TextSpan>
          <Circle />
          <TextSpan>02/09/2020-07:00 am</TextSpan>
        </BoxFouter>
        <Linea />
      </Box>

      <Box>
        <Title>DÍA A DÍA</Title>
        <MiniTitle>Tarea:
          <Paragraph> Texto con descripción de la actividad puede ser
            con las 3 lineas de texto.</Paragraph>
        </MiniTitle>
        <BoxFouter>
          <BoxIcon>
            <Icon.Button name='star' />
            <TextIcon>PENDIENTE</TextIcon>
          </BoxIcon>
          <Circle />
          <TextSpan>Por Antonio Casil</TextSpan>
          <Circle />
          <TextSpan>02/09/2020-07:00 am</TextSpan>
        </BoxFouter>
        <Linea />
      </Box>


    </Container>
  )
}

export default Request
