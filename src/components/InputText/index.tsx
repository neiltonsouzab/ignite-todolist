import { useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";

import { styles } from './styles';

type Props = TextInputProps

export function InputText({ style, ...rest }: Props) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <TextInput 
      placeholderTextColor="#808080"
      onFocus={() => setIsFocus(true)}
      onBlur={() => setIsFocus(false)}
      style={[styles.input, style, isFocus && styles.inputWithFocus]} 
      {...rest} />
  )
}