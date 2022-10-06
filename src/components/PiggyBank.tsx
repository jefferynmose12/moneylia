import { Image, Center } from 'native-base'
import React from 'react'

const PiggyBank = () => {
    return (
        <Center>
            <Image
                source={require(`../assets/images/piggybank.png`)}
                alt='piggybank'
                size={7}
            />
        </Center>
    )
}

export default PiggyBank