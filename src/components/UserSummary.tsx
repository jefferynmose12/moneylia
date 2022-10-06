import { Text, VStack } from "native-base";
import React from 'react';
import { UserSummaryProps } from "../type";
import { colors } from "../assets/color";

export const UserSummary = ({ first, second, colorOne } : UserSummaryProps) => {

  const styles = {
    small : {
      fontSize : 12,
      color : colorOne? colors.neutralGray : colors.neutralPrimary,
      fontFamily : "WorkSans-Regular"
    },
    big : {
      fontSize : 16,
      color : colorOne? colors.secondary : colors.neutralSecondary,
      fontFamily : "WorkSans-Regular"
    }
  }

  return (
    <VStack space={0.1}>
      <Text style={styles.small}>{first}</Text>
      <Text fontWeight={400} style={styles.big}>{second}</Text>
    </VStack>
  )
}