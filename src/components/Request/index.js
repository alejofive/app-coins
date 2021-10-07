import React from 'react'
import { Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Container } from './Styles'

const Request = () => {
  return (
    <Container>
      <Text>Dia a Dia</Text>
      <Text>
        <Text>Tarea:</Text> Texto con descripción de la actividad puede ser con las 3 lineas de texto.
      </Text>
      <Icon.Button name='facebook' backgroundColor='#3b5998' /> 
    </Container>
  )
}

export default Request
