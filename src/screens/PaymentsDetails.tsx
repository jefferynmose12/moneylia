import { Text, Image, Box, HStack, Pressable, Center, } from "native-base";
import React from 'react'
import { colors } from "../assets/color";
import Detail from "../components/Detail";
import Notice from "../components/Notice";
import StatusBarCon from "../components/StatusBarCon";
import TotalSection from "../components/TotalSection";

export const PaymentsDetails = ({route, navigation : { goBack }} : any) => {

    const styles = {
        box : {
            flex : 1,
            backgroundColor : colors.white,
        },
        first : {
            paddingTop : 15,
            paddingBottom : 15,
            paddingHorizontal : 20,
            backgroundColor : colors.rose
        },
        center : {
            flex : 1,
            paddingRight : 21
        },
        headText : {
            fontSize : 17,
            fontFamily : "WorkSans-Regular",
            color : colors.white,
        },
        second : {
            flex : 1,
            backgroundColor : colors.white,
            paddingTop : 15,
            marginHorizontal : 20,
        },
        end : {
            paddingTop : 33,
        },
        total : {
            fontSize : 20,
            color : colors.neutralSecondary,
            fontFamily : "WorkSans-SemiBold",
        },
        totalText: {
            color : colors.error,
            fontSize : 20,
            fontFamily : "WorkSans-Regular",
        }
    }

    const payment = route.params

    return (
        <Box style={styles.box}>
            <StatusBarCon text='light-content' bg={colors.rose} />
            
            <HStack alignItems='center' style={styles.first}>
                <Pressable onPress={() => goBack()}>
                    <Image
                        source={require(`../assets/images/left.png`)}
                        alt='left'
                        size={7}
                    />
                </Pressable>
                <Center style={styles.center}>
                    <Text style={styles.headText}>Payment details</Text>
                </Center>
            </HStack>
            
            <Box style={styles.second}>
                <Notice />
                <Detail 
                    head="Creditor" 
                    text={payment.creditor}
                />
                <Detail 
                    head="Causal" 
                    text={payment.causal}
                />
                <Detail 
                    head="Expiry date" 
                    text={payment.date} 
                />
                <Detail 
                    head="Creditor tax code" 
                    text={payment.taxcode} 
                />
                <Detail 
                    head="Notice code" 
                    text={payment.noticecode}
                />
                <TotalSection total={payment.amount} />
            </Box>
        </Box>
    )
}