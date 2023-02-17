import { TouchableOpacity } from 'react-native';
import { Trash } from 'phosphor-react-native';

import { styles } from './styles';
import { colors } from '../../theme';
import { useState } from 'react';

type Props = {
  onPress: () => void;
}

export function DeleteButton({ onPress }: Props) {
  const [isPressed, setIsPressed] = useState(false)

  return (
    <TouchableOpacity 
      onPress={onPress}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      style={[styles.button, isPressed && styles.buttonPresssed]}>
      <Trash size={18} color={isPressed ? colors.danger : colors.gray300} />
    </TouchableOpacity>
  )
}