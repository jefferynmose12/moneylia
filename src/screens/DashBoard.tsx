import { Heading, Text, Box, View, } from "native-base";
import React from 'react'
import { colors } from "../assets/color";
import Contribution from "../components/Contribution";
import User from "../components/User";
import StatusBarCon from "../components/StatusBarCon";
import HeadIcon from "../components/HeadIcon";

export const DashBoard = () => {

    const styles = {
        box : {
            flex : 1,
            backgroundColor : colors.mainbg
        },
        upper : {
            height : '36%', 
            borderBottomLeftRadius : 20,
            borderBottomRightRadius : 20,
            paddingTop : 15,
            paddingHorizontal : 20,
        },
        headText : {
            color : colors.white,
            fontFamily : "WorkSans-Regular",
            fontSize : 32
        },
        text : {
            color : colors.white,
            marginTop : -2,
            fontFamily : "WorkSans-Regular",
            fontSize : 14
        },
        contain : {
            marginHorizontal : 20,
            backgroundColor : colors.white,
            marginTop : -95,
            maxWidth : '100%',
            borderRadius : 10,
            paddingHorizontal : 23,
            paddingVertical : 26
        },
        inner : {
            paddingTop : 15,
        },
        contribution : {
            paddingHorizontal : 20,
        },
        wholeBox : {
            paddingTop : 16,
            maxWidth : '100%'
        }
    }

    return (
        <Box style={styles.box}>
            <StatusBarCon text='light-content' bg={colors.primary} />
            <View bg={colors.primary} style={styles.upper}>
                <HeadIcon />
                <Box pt='12'>
                    <Heading fontWeight="400" style={styles.headText}>Hello, John S.</Heading>
                    <Text style={styles.text}>Welcome in Moneylia</Text>
                </Box>
            </View>
            <User />
            <Contribution />
        </Box>
    )
}