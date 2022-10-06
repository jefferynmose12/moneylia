import { Text, VStack, Image } from 'native-base'
import React from 'react'
import { colors } from '../assets/color'

const PagoIcon = () => {

    const styles = {
        box : {
          height : '100%',
          paddingHorizontal : 11,
          borderTopStyle : 'solid',
          borderTopColor : colors.white,
          borderTopWidth : 2,
          paddingTop : 7
        },
        text : {
            fontSize : 11,
            color : colors.neutralGray,
            fontFamily : "Rubik-Regular",
        }
    }

    return (
        <VStack space={0.5} alignItems='center' style={styles.box}>
            <Image
                source={require(`../assets/images/pagowhite.png`)}
                alt='PagoPA'
            />
            <Text style={styles.text}>PagoPA</Text>
        </VStack>
    )
}

export default PagoIcon