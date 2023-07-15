import React from 'react';
import {View} from 'react-native';
import {Shadow} from 'react-native-shadow-2';
import {useStyles} from './index.styles';
import {IconView} from '@common/components/Icon';
import {TextView} from '@common/components/TextView';
import {useCommonStyles} from '@common/style/commonStyles';

export const EventCard: React.FC = () => {
  const {styles, cx, theme} = useStyles({});
  const {styles: commonStyles} = useCommonStyles({});

  return (
    <View style={{flexDirection: 'row'}}>
      <Shadow
        distance={10}
        startColor={'#00000005'}
        endColor={'#00000000'}
        paintInside
        offset={[0, 0]}>
        <View style={styles.container}>
          <TextView variant={'semiBold'} style={styles.companyTitle}>
            Intel
          </TextView>

          {/* Section 2 */}
          <View style={styles.section2}>
            <TextView
              variant={'bold'}
              style={cx(styles.headerText, commonStyles.blackText)}>
              Category overview:
            </TextView>
            <TextView
              variant={'bold'}
              style={cx(styles.headerText, commonStyles.blackText)}>
              {'Bottles and packaging,\nNorth America'}
            </TextView>
          </View>
          {/* section 3 */}
          <View style={styles.section3}>
            <TextView
              isUpperCase
              variant="semiBold"
              style={styles.section3Text1}>
              Updated
            </TextView>
            <TextView
              isUpperCase
              variant="semiBold"
              style={cx(styles.section3Text1, commonStyles.blackText)}>
              May 27
            </TextView>
          </View>

          <View style={styles.reportSection}>
            <TextView variant="semiBold" isUpperCase style={styles.reportView}>
              View report
            </TextView>
            <IconView
              name="rightArrow"
              color={theme.palette.primaryColor}
              size={12}
            />
          </View>
        </View>
      </Shadow>
      {/* <View style={styles.separator} /> */}
    </View>
  );
};
