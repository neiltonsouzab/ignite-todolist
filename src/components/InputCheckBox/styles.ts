import { StyleSheet } from "react-native";

import { colors } from "../../theme";

export const styles = StyleSheet.create({
  input: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputChecked: {
    backgroundColor: colors.purpleDark,
    borderWidth: 0,
  }
})