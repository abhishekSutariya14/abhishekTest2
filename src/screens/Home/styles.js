import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/Colors';
import {normalize} from '../../utils/UtilityFunction';
import {FONT_SIZE} from '../../utils/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(10),
  },
  postItem: {
    marginBottom: normalize(15),
    padding: normalize(10),
    backgroundColor: COLORS.WHITE,
    borderRadius: normalize(5),
  },
  postTitle: {
    fontSize: FONT_SIZE.font18,
    fontWeight: 'bold',
  },
  postBody: {
    marginTop: normalize(5),
    fontSize: FONT_SIZE.font16,
  },
  errorText: {
    fontSize: FONT_SIZE.font18,
    color: 'red',
    textAlign: 'center',
    marginVertical: normalize(20),
  },
  refreshButton: {
    backgroundColor: COLORS.AQUA,
    padding: normalize(10),
    borderRadius: normalize(5),
    marginBottom: normalize(10),
  },
  refreshButtonText: {
    color: COLORS.WHITE,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
