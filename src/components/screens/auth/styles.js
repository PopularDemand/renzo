import { StyleSheet } from 'react-native';

const spacing = 20;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 32,
    letterSpacing: .5,
    marginBottom: spacing
  },
  icon: {
    marginBottom: spacing,
  }
});
