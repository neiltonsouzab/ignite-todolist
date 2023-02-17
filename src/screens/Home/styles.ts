import { StyleSheet } from "react-native";
import { colors, fonts } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray600
  },
  header: {
    height: 170,
    backgroundColor: colors.gray700,
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    flex: 1,
    marginTop: -27,
    paddingLeft: 24,
    paddingRight: 24,
  },
  form: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    marginRight: 8,
  },
  tasks: {
    marginTop: 32,
    flex: 1,
  },
  tasksHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  tasksInfo: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  tasksInfoCreated: {
    fontFamily: fonts.InterBold,
    fontSize: 14,
    color: colors.blue
  },
  tasksInfoDoned: {
    fontFamily: fonts.InterBold,
    fontSize: 14,
    color: colors.purple
  },
  tasksInfoCounter: {
    marginLeft: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
    backgroundColor: colors.gray400,
    borderRadius: 999,
    fontFamily: fonts.InterBold,
    fontSize: 12,
    color: colors.gray200,
  },
  tasksEmpty: {
    borderTopWidth: 1,
    borderColor: colors.gray400,
    paddingHorizontal: 20,
    paddingVertical: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tasksEmptyText: {
    fontFamily: fonts.InterRegular,
    fontSize: 14,
    textAlign: 'center',
    color: colors.gray300,
  },
  tasksEmptyTextHighlight: {
    marginTop: 16,
    marginBottom: 2,
    fontFamily: fonts.InterBold,
  }
})