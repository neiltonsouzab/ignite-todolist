import { StyleSheet } from "react-native";

import { colors, fonts  } from '../../theme'

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    height: 54,
    padding: 16,
    backgroundColor: colors.gray500,
    borderRadius: 5,
    color: colors.gray100,
    fontFamily: fonts.InterRegular,
    fontSize: 16
  },
  inputWithFocus: {
    borderWidth: 1,
    borderColor: colors.purpleDark
  }
})