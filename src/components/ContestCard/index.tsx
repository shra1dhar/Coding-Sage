import React, { FC } from 'react';
import { htmlDecoding } from '../../utils/helper/entities';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Fonts } from '../../global/Fonts/Size';
import { Colours } from '../../global/Colors';
import Calender from '../Calender';

export interface IContestData {
  contestEndDate: string;
  contestName: string;
  contestStartDate: string;
}

const ContestCard: FC<IContestData> = props => {
  const { contestName, contestEndDate, contestStartDate } = props;
  // const [startDate, startTime] = getDateTime(contestStartDate);
  // const [endDate, endTime] = getDateTime(contestEndDate);

  return (
    <View style={styles.listItem}>
      <View>
        <Image style={styles.img} source={require('../../../assets/images/optimized/codechef.jpg')} />
      </View>
      <View style={styles.listBody}>
        <View style={styles.headWrap}>
          <Text style={styles.heading}>{htmlDecoding(contestName)}</Text>
        </View>
        <View style={styles.timeWrapper}>
          <Calender date={new Date(contestStartDate)} />
          <Calender date={new Date(contestEndDate)} />
          {/* <Text>
            {startDate} - {endDate}
          </Text> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: '#e7e7e7',
    backgroundColor: '#f2f3f5',
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
  },
  headWrap: {
    // marginRight: 10,
    flexWrap: "wrap"
  },
  heading: {
    fontSize: Fonts.large,
    padding: 5,
    color: Colours.primaryText,
    flexWrap: "wrap"
  },
  timeWrapper: {
    // backgroundColor: '#555',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
  },
  listBody: {
    flexGrow: 1,
    // backgroundColor: '#e51e3a',
  },
});

export default ContestCard;
