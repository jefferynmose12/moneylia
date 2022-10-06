import React from 'react';
import { Heading, Text, Image, Box, HStack, Spacer, ScrollView } from "native-base";
import { colors } from '../assets/color';
import StatusBarCon from '../components/StatusBarCon';
import HeadIcon from '../components/HeadIcon';
import PaymentSection from '../components/PaymentSection';
import { Payments } from '../assets/Payment';

const PagopaServices = ({navigation} : any) => {

    const styles = {
        box : {
            flex : 1,
            backgroundColor : colors.mainbg
        },
        first : {
            height : '22%',
            borderBottomLeftRadius : 20,
            borderBottomRightRadius : 20,
            paddingTop : 20,
            paddingHorizontal : 20,
            backgroundColor : colors.rose
        },
        headText : {
            fontSize : 24,
            color : colors.white,
            fontFamily : "WorkSans-SemiBold"
        },
        second : {
            paddingTop : 14,
            paddingHorizontal : 20
        },
        move : {
            fontSize : 24,
            fontFamily : "WorkSans-SemiBold",
            color : colors.secondary
        },
        text : {
            fontSize : 14,
            color : colors.neutralPrimary,
            fontFamily : "WorkSans-Regular",
            paddingTop : 2
        },
        scroll : {
            height : 400,
            paddingBottom : 20,
            marginVertical : 5,
            paddingVertical : 15
        }
    }

    return (
        <Box style={styles.box}>
            <StatusBarCon text='light-content' bg={colors.rose} />

            <Box style={styles.first}>
                <HeadIcon />
                <HStack pt={8} alignItems='center'>
                    <Heading fontWeight="600" style={styles.headText}>Tax payments</Heading>
                    <Spacer />
                    <Image
                        source={require(`../assets/images/pago.png`)}
                        alt='pago'
                        size={12}
                    />
                </HStack>
            </Box>

            <Box style={styles.second}>
                <Box pt={2}>
                    <Heading fontWeight="700" style={styles.move}>Movements to pay</Heading>
                    <Text pt={2} style={styles.text}>
                        View pending transactions for the past two years and proceed to payment.
                    </Text>
                </Box>
                
                <ScrollView showsVerticalScrollIndicator={false} style={styles.scroll}>
                    {
                        Payments.map((payment, index) => (
                            <PaymentSection key={index} payment={payment} navigation={navigation} />
                        ))
                    }
                </ScrollView>
            </Box>
        </Box>
    )
}

export default PagopaServices