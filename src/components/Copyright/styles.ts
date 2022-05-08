import { StyleSheet } from 'react-native';

import { theme } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    marginBottom: 50
  },
  text: {
    fontSize: 12,
    color: theme.colors.text_secondary,
    fontFamily: theme.fonts.medium
  }
});