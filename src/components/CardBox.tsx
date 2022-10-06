import { Text, Box, VStack } from "native-base";
import React from 'react'
import { colors } from "../assets/color";
import { CardBoxProps } from "../type";

export default function CardBox({icon, text, unavailable, amount} : CardBoxProps) {

    const styles = {
        box : {
            backgroundColor : colors.white,
            maxWidth : 168,
            width : '49%',
            paddingVertical : 17,
            marginTop : 8,
            marginBottom : 11,
            borderRadius : 10,
        },
        icon : {
            paddingBottom : 7
        },
        textOne : {
            fontSize : 12,
            fontFamily : "WorkSans-Regular",
            color : colors.neutralGray
        },
        textTwo : {
            fontSize : 16,
            fontFamily : "WorkSans-Regular",
            color : unavailable ? colors.error : colors.secondary
        }
    }

    return (
        <Box style={styles.box} alignItems='center' shadow={1}>
            <VStack>
                <Box style={styles.icon} alignItems='center'>
                    {icon}
                </Box>
                <Box alignItems='center'>
                    <Text style={styles.textOne}>{text}</Text>
                    {unavailable && <Text style={styles.textTwo}>Unavailable</Text>}
                    {amount && <Text style={styles.textTwo}>{amount}</Text>}
                </Box>
            </VStack>
        </Box>
    )
}