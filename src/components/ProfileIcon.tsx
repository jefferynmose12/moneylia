import React from 'react';
import { VStack, Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { colors } from '../assets/color'

const ProfileIcon = () => {

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
        <VStack space={0.2} alignItems='center' style={styles.box}>
            <Ionicons size={25} name='person-outline' />
            <Text style={styles.text}>Profile</Text>
        </VStack>
    )
}

export default ProfileIcon