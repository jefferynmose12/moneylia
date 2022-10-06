import { Heading, HStack, Spacer, Image } from 'native-base'
import React from 'react';
import { colors } from '../assets/color';

const Notice = () => {

    const styles = {
        headStack : {
            paddingBottom : 15,
        },
        mainText : {
            fontSize : 20,
            color : colors.secondary,
            fontFamily : "WorkSans-Medium",
        },
    }

    return (
        <>
            <HStack alignItems='center' style={styles.headStack}>
                <Heading fontWeight={600} style={styles.mainText}>Payment notice</Heading>
                <Spacer />
                <Image
                    source={require(`../assets/images/pagoimg.png`)}
                    alt='pagoimg'
                    size='40px'
                />
            </HStack>
        </>
    )
}

export default Notice