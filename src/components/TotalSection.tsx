import React from 'react';
import { Heading, HStack, Spacer, Text, VStack } from 'native-base';
import { CustomButton } from './CustomButton';
import { colors } from '../assets/color';
import { TotalProps } from '../type';

const TotalSection = ({total} : TotalProps) => {

    const styles = {
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

    const handleClick = () => {
        
    }

    return (
        <VStack space={3} style={styles.end}>
            <HStack alignItems='center'>
                <Heading fontWeight={600} style={styles.total}>Total due</Heading>
                <Spacer />
                <Text style={styles.totalText}>{total}</Text>
            </HStack>
            <CustomButton text="Pay now" px="5px" backgroundColor={colors.rose} press={handleClick} />
        </VStack>
    )
}

export default TotalSection