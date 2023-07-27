import {StyleSheet} from 'react-native';
import {normalize} from '../../utils/UtilityFunction';
import {FONT_SIZE} from '../../utils/Fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: normalize(10),
  },
  postTitle: {
    fontSize: FONT_SIZE.font18,
    fontWeight: 'bold',
  },
  postBody: {
    marginTop: normalize(10),
    fontSize: FONT_SIZE.font16,
  },
});
