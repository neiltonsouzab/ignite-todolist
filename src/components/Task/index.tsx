import { useState } from "react";
import { Text, View } from "react-native";
import { DeleteButton } from "../DeleteButton";
import { InputCheckBox } from "../InputCheckBox";
import { styles } from "./styles";

type Props = {
  task: string;
  doned: boolean;
  onToggleAsDone: () => void;
  onDelete: () => void;
}

export function Task({ task, doned, onToggleAsDone, onDelete }: Props) {
  return (
    <View style={styles.container}>
      <InputCheckBox onCheck={onToggleAsDone} />
      <Text style={[styles.text, doned && styles.done]}>
        {task}
      </Text>
      <DeleteButton onPress={onDelete} />
    </View>
  )
}