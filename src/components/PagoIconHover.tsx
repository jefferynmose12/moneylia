import { Text, VStack, Image } from 'native-base'
import React from 'react'
import { colors } from '../assets/color'

const PagoIconHover = () => {

    const styles = {
        box : {
          height : '100%',
          paddingHorizontal : 11,
          borderTopStyle : 'solid',
          borderTopColor : colors.primary,
          borderTopWidth : 2,
          paddingTop : 7
        },
        text : {
            fontSize : 11,
            color : colors.primary,
            fontFamily : "Rubik-Regular",
        }
    }

    return (
        <VStack space={0.5} alignItems='center' style={styles.box}>
            <Image
                source={require(`../assets/images/pagopahover.png`)}
                alt='PagoPA'
            />
            <Text style={styles.text}>PagoPA</Text>
        </VStack>
    )
}

export default PagoIconHover