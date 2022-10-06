import React from 'react'
import { Image } from 'native-base'

const PagopaImg = () => {
  return (
    <Image
        source={require(`../assets/images/pagoimg.png`)}
        alt='pagoimg'
        size='56px'
    />
  )
}

export default PagopaImg