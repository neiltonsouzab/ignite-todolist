import { useState } from "react";
import { Pressable } from "react-native";
import { Check } from 'phosphor-react-native';

import { styles } from './styles';
import { colors } from '../../theme'

type Props = {
  onCheck: () => void
}

export function InputCheckBox({ onCheck }: Props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked(prevState => !prevState)
    onCheck()
  }

  return (
    <Pressable 
      style={[styles.input, isChecked && styles.inputChecked]}
      onPress={handleCheck}>
      {isChecked && <Check weight="bold" size={14} color={colors.gray100}  />}
    </Pressable>
  )
}