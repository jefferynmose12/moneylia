import { Image, Center } from 'native-base'
import React from 'react'

const Build = () => {
    return (
        <Center>
            <Image
                source={require(`../assets/images/build.png`)}
                alt='build'
                size={7}
            />
        </Center>
    )
}

export default Build;