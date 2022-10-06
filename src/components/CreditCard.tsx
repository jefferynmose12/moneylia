import { Image, Center } from 'native-base'
import React from 'react'

const CreditCard = () => {
    return (
        <Center>
            <Image
                source={require(`../assets/images/creditcard.png`)}
                alt='creditcard'
                size={7}
            />
        </Center>
    )
}

export default CreditCard