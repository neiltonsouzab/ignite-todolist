import { StyleSheet } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: colors.gray500,
    borderRadius: 5,
    marginBottom: 8,
  },
  text: {
    flex: 1,
    marginLeft: 16,
    marginRight: 16,
    fontFamily: fonts.InterRegular,
    fontSize: 14,
    color: colors.gray100,
  },
  done: {
    textDecorationLine: 'line-through',
    color: colors.gray300
  }
})