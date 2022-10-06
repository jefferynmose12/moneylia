import React from 'react'
import { VStack, Text } from 'native-base';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { colors } from '../assets/color'

const ExtractIcon = () => {

    const styles = {
        box : {
          height : '100%',
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
        <VStack alignItems='center' style={styles.box}>
            <Fontisto size={28} name='file-1' />
            <Text style={styles.text}>Extract</Text>
        </VStack>
    )
}

export default ExtractIcon