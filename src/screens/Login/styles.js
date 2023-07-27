import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Colors';
import {normalize} from '../../utils/UtilityFunction';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(20),
  },
  input: {
    width: '100%',
    height: normalize(40),
    borderColor: 'gray',
    borderWidth: normalize(1),
    borderRadius: normalize(5),
    marginBottom: normalize(10),
    paddingLeft: normalize(10),
  },
  button: {
    backgroundColor: COLORS.AQUA,
    padding: normalize(10),
    borderRadius: normalize(5),
  },
  buttonText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
