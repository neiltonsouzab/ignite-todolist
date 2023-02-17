import { useState } from "react"
import { TouchableOpacity } from "react-native"
import { PlusCircle } from 'phosphor-react-native';

import { colors } from "../../theme";
import { styles } from "./styles";

type Props = {
  onPress: () => void;
}

export function CreateButton({ onPress }: Props) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <TouchableOpacity 
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[styles.button, isPressed && styles.buttonPresssed]}>
      <PlusCircle size={24} color={colors.gray100} />
    </TouchableOpacity>
  )
}