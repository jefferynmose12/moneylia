import { Button } from "native-base";
import React from 'react';
import { CustomButtonProps } from "../type";


export const CustomButton = ({text, px, backgroundColor, press} : CustomButtonProps) => {

  const styles = {
    btn : {
      backgroundColor,
    },
    text : {
      fontWeight : 600,
      px,
    }
  }

  return (
    <Button size="lg" style={styles.btn} textAlign='center' _text={styles.text} onPress={press}>
      {text}
    </Button>
  )
}