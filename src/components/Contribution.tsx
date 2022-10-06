import React from 'react'
import { Heading, Box, Flex, ScrollView } from "native-base";
import CardBox from './CardBox';
import ChartPie from './ChartPie';
import CreditCard from './CreditCard';
import PiggyBank from './PiggyBank';
import Build from './Build';
import { colors } from '../assets/color';

const Contribution = () => {

    const styles = {
        contribution : {
            paddingHorizontal : 20,
        },
        wholeBox : {
            paddingTop : 16,
            maxWidth : '100%'
        },
        headText : {
            fontSize : 22,
            color : colors.secondary,
            fontFamily : "WorkSans-Medium",
        }
    }

    return (
        <ScrollView flex={1} mt={5}>
            <Box style={styles.contribution}>
                <Heading fontWeight="500" style={styles.headText}>Contributions of 2022</Heading>
                <Flex
                    pt={1}
                    flexWrap="wrap"
                    direction='row'
                    justifyContent='space-between'
                >
                    <CardBox
                        icon={<ChartPie />}
                        text="Paid"
                        unavailable={true}
                    />
                    <CardBox
                        icon={<CreditCard />}
                        text="Due"
                        unavailable={true}
                    />
                    <CardBox
                        icon={<PiggyBank />}
                        text="Due"
                        amount='€ 1,230.00'
                    />
                    <CardBox
                        icon={<Build />}
                        text="Modularity"
                        amount='€ 340.59'
                    />
                </Flex>
            </Box>
        </ScrollView>
    )
}

export default Contribution