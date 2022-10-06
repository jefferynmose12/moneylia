import React from 'react'
import { Text, VStack } from 'native-base'
import Octicons from 'react-native-vector-icons/Octicons';
import { HomeIconProps } from '../type';
import { colors } from '../assets/color';

const HomeIcon = ({text, color} : HomeIconProps) => {

  const styles = {
    box : {
      height : '100%',
      borderTopStyle : 'solid',
      borderTopColor : color ? colors.primary : colors.white,
      borderTopWidth : 2,
      paddingTop : 7
    },
    text : {
      fontSize : 11, 
      color : color ? colors.primary : colors.neutralGray,
      fontFamily : "Rubik-Regular",
    }
  }

  return (
    <VStack alignItems='center' style={styles.box}>
      <Octicons size={28} name='home' color={color && colors.primary} />
      <Text style={styles.text}>{text}</Text>
    </VStack>
  )
}

export default HomeIcon