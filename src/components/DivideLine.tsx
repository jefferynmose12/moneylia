import { Divider } from 'native-base';
import React from 'react';
import { colors } from '../assets/color';

const DivideLine = () => {

    const styles = {
        divide : {
            backgroundColor : colors.divide
        }
    }

    return (
        <Divider style={styles.divide} />
    )
}

export default DivideLine