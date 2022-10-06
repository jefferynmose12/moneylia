import React from 'react';
import { Image, HStack, Spacer } from "native-base";

const HeadIcon = () => {
    return (
        <HStack alignItems='center'>
            <Image
                source={require(`../assets/images/logoWhite.png`)}
                alt='logoWhite'
                size={7}
            />
            <Spacer />
            <Image
                source={require(`../assets/images/chat.png`)}
                alt='chat'
                size={7}
            />
        </HStack>
    )
    }

export default HeadIcon