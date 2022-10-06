import { Image, Center } from 'native-base'
import React from 'react'

const ChartPie = () => {
    return (
        <Center>
            <Image
                source={require(`../assets/images/chartpie.png`)}
                alt='chartpie'
                size={7}
            />
        </Center>
    )
}

export default ChartPie