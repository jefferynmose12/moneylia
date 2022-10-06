import React from 'react';
import { Heading, Image, Box, VStack, HStack } from "native-base";
import { colors } from '../assets/color';
import { UserSummary } from './UserSummary';

const User = () => {

    const styles = {
        contain : {
            marginHorizontal : 20,
            backgroundColor : colors.white,
            marginTop : -80,
            maxWidth : '100%',
            borderRadius : 10,
            paddingHorizontal : 20,
            paddingVertical : 22
        },
        headText : {
            color : colors.secondary,
            fontFamily : "WorkSans-SemiBold"
        },
        inner : {
            paddingTop : 15,
        },
    }
    
    return (
        <Box style={styles.contain} shadow={1}>
            <HStack alignItems='center' space={2}>
                <Image
                    source={require(`../assets/images/person.png`)}
                    alt='person'
                    size={6}
                />
                <Heading size='sm' fontWeight="600" style={styles.headText}>User summary</Heading>
            </HStack>

            <Box style={styles.inner}>
                <VStack space={3}>
                    <HStack space='55px'>
                        <UserSummary first='Status' second='Subscribed' />
                        <UserSummary first='Birthday' second='26/01/1994' />
                    </HStack>
                    <HStack space='65px'>
                    <UserSummary colorOne={true} first='City' second='Barcelona' />
                        <HStack space={9}>
                            <UserSummary colorOne={true} first='Country' second='ES' />
                            <UserSummary colorOne={true} first='Number' second='100' />
                        </HStack>
                    </HStack>
                </VStack>
            </Box>
        </Box>
    )
}

export default User