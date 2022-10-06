import React from 'react';
import { StatusBar } from "native-base";
import { StatusBarProps } from '../type';
import { useIsFocused } from '@react-navigation/native';

const StatusBarCon = ({text, bg} : StatusBarProps) => {
  
  const isFocused = useIsFocused();

  return isFocused ? <StatusBar backgroundColor={bg} barStyle={text} /> : null
}

export default StatusBarCon