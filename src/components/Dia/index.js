import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { BigCircle, Boton, BotonText, Box, Boxbig, BoxbigTetx, BoxBoton, BoxText, CajaCircle, Circle, CircleText, Container, Linea, Section, View } from './Styles'


const Opcion = () => {

  return (
    <Container>
      <View>
        <Linea>
          <BigCircle>
            <CircleText>Crear tarea</CircleText>
            <CajaCircle>
              <Circle>
                <Icon name='check' color='#ffff' size={15} />
              </Circle>
            </CajaCircle>
          </BigCircle>

          <BigCircle>
            <CircleText>Paso a paso</CircleText>
            <CajaCircle>
              <Circle>
                <Icon name='check' color='#ffff' size={15} />
              </Circle>
            </CajaCircle>
          </BigCircle>

          <BigCircle>
            <CircleText>Enviar permiso</CircleText>
            <CajaCircle>
              <Circle>
                <Icon name='check' color='#ffff' size={15} />
              </Circle>
            </CajaCircle>
          </BigCircle>
        </Linea>
      </View>

      <Section>
        <Boxbig>
          <Box>
            <BoxText>TAREA:</BoxText>
            <BoxBoton>
              <Icon name='plus' color='#ffff' size={15} />
            </BoxBoton>
          </Box>

          <BoxbigTetx>Dragado de alcantarillado con la ayuda del equipo.</BoxbigTetx>
        </Boxbig>

        <Boxbig>
          <Box>
            <BoxText>TAREA:</BoxText>
            <BoxBoton>
              <Icon name='plus' color='#ffff' size={15} />
            </BoxBoton>
          </Box>

          <BoxbigTetx>Dragado de alcantarillado con la ayuda del equipo.</BoxbigTetx>
        </Boxbig>

        <Boxbig>
          <Box>
            <BoxText>TAREA:</BoxText>
            <BoxBoton>
              <Icon name='plus' color='#ffff' size={15} />
            </BoxBoton>
          </Box>

          <BoxbigTetx>Dragado de alcantarillado con la ayuda del equipo.</BoxbigTetx>
        </Boxbig>

        <Boxbig>
          <Box>
            <BoxText>TAREA:</BoxText>
            <BoxBoton>
              <Icon name='plus' color='#ffff' size={15} />
            </BoxBoton>
          </Box>

          <BoxbigTetx>Dragado de alcantarillado con la ayuda del equipo.</BoxbigTetx>
        </Boxbig>

        <Boxbig>
          <Box>
            <BoxText>TAREA:</BoxText>
            <BoxBoton>
              <Icon name='plus' color='#ffff' size={15} />
            </BoxBoton>
          </Box>

          <BoxbigTetx>Dragado de alcantarillado con la ayuda del equipo.</BoxbigTetx>
        </Boxbig>

        <Boxbig>
          <Box>
            <BoxText>TAREA:</BoxText>
            <BoxBoton>
              <Icon name='plus' color='#ffff' size={15} />
            </BoxBoton>
          </Box>

          <BoxbigTetx>Dragado de alcantarillado con la ayuda del equipo.</BoxbigTetx>
        </Boxbig>
      </Section>

      <Section>
        <Boton>
          <BotonText>SOLICITAR APROBACIÓN</BotonText>
        </Boton>
      </Section>

    </Container>
  )
}

export default Opcion