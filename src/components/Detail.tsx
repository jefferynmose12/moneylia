import React from 'react';
import { Text, Box } from "native-base";
import { colors } from '../assets/color';
import DivideLine from './DivideLine';
import { DetailProps } from '../type';

const Detail = ({head, text} : DetailProps) => {

    const styles = {
        textStack : {
            paddingVertical : 15,
        },
        textOne : {
            color : colors.neutralSecondary,
            fontSize : 16,
            fontFamily : "WorkSans-SemiBold",
        },
        textTwo : {
            paddingTop : 7,
            color : colors.neutralPrimary,
            fontSize : 16,
            fontFamily : "WorkSans-Regular",
            width : '80%',
            lineHeight : 19
        },
        divide : {
            backgroundColor : colors.divide
        }
    }

    return (
        <>
            <DivideLine />
            <Box style={styles.textStack}>
                <Text style={styles.textOne}>{head}</Text>
                <Text style={styles.textTwo}>
                    {text}
                </Text>
            </Box>
        </>
    )
}

export default Detail