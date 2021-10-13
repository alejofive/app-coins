import React from 'react'

import Icon from 'react-native-vector-icons/FontAwesome'
import { Boton, BtnCircle, BotonText, BoxBoton, BoxText, Container, ItemText, Number, Text, TextBtn, BtnCircle2, BoxBoton2, TextBtn2 } from './Styles'

const Opcion = () => {

  return (
    <Container>
      <Boton>
        <BotonText>AUTO DECLARACIÓN DE APTITUD</BotonText>
        <Icon name='angle-down' color='#43B6E6' size={20} />
      </Boton>

      <BoxText>
        <ItemText>
          <Number>1.<Text> ¿Actualmente tiene dificultad para respirar?</Text></Number>
          <BoxBoton>
            <BtnCircle>
              <TextBtn>NO</TextBtn>
            </BtnCircle>
          </BoxBoton>
          <BoxBoton2>
            <BtnCircle2>
              <TextBtn2>SI</TextBtn2>
            </BtnCircle2>
          </BoxBoton2>
        </ItemText>
      </BoxText>

    </Container>
  )
}

export default Opcion