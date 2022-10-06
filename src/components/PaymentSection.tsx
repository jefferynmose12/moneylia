import { Heading, Text, Image, HStack, Spacer, Center, Pressable, VStack } from "native-base";
import React from 'react'
import { colors } from "../assets/color";
import { PaymentSectionProps } from "../type";

const PaymentSection = ({payment, navigation} : PaymentSectionProps) => {

    const styles = {
        contain : {
            paddingLeft : 10,
            paddingVertical : 12,
            paddingRight : 10,
            borderRadius : 10,
            backgroundColor : colors.white,
            marginVertical : 7,
            maxWidth : '100%'
        },
        headText : {
            fontSize : 12,
            maxWidth : '100%',
            color : colors.secondary,
            fontFamily : "WorkSans-Bold",
            lineHeight : 12 
        },
        date : {
            fontSize : 14,
            color : colors.neutralLight,
            fontFamily : "WorkSans-Regular"
        },
        amount : {
            fontSize : 14,
            color : colors.error,
            fontFamily : "WorkSans-Regular"
        }
    }

    const { image, text, date, amount } = payment

    return (
        <Pressable onPress={() => navigation.navigate('PaymentsDetails', payment)} style={styles.contain} shadow={1}>
            <HStack alignItems="center" space={2}>
                {image}
                <VStack space={2} maxW="97.1%" w='70%'>
                    <Heading fontWeight="700" style={styles.headText}>
                        {text}
                    </Heading>
                    <HStack alignItems="center">
                        <Text style={styles.date}>{date}</Text>
                        <Spacer />
                        <Text style={styles.amount}>{amount}</Text>
                    </HStack>
                </VStack>
                <Spacer />
                <Center ml='auto'>
                    <Image
                        source={require(`../assets/images/right.png`)}
                        alt='right'
                        size={5}
                    />
                </Center>
            </HStack>
        </Pressable>
    )
}

export default PaymentSection