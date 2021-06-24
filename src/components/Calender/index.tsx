import React, { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colours } from '../../global/Colors';
import { Fonts } from '../../global/Fonts/Size';
import { getDateTime } from '../../utils/helper/time';
import Circle from '../Calender/Circle';
import { DAY_MAP, MONTH_MAP } from './constants';

interface Props {
  date: Date;
}

const Calender: FC<Props> = ({ date }) => {
  const numDate = date.getDate();
  const weekDay = DAY_MAP[date.getDay()];
  const month = MONTH_MAP[date.getMonth()];
  const year = date.getFullYear();
  const [_, time] = getDateTime(date);

  const getCircles = num => {
    return (
      <View style={cal.dotRow}>
        {new Array(num).fill(null).map(() => (
          <Circle size={3} color="#eee" opacity={0.5} />
        ))}
      </View>
    );
  };

  return (
    <View style={cal.main}>
      <View style={cal.topSection}>
        <View style={cal.topHooks}>
          <Circle size={8} color="#eee" />
          <Circle size={8} color="#eee" />
        </View>
        <View style={cal.topBody}>
          <Text style={cal.monthText}>{month}</Text>
          <View>
            <Text style={cal.year}>{year}</Text>
            {/* {getCircles(3)}
            {getCircles(3)} */}
          </View>
        </View>
      </View>
      <View style={cal.bottomSection}>
        <Text style={cal.bottomMainDate}>{numDate}</Text>
        <Text style={cal.weekday}>{weekDay}</Text>
        <View>
          <Text style={cal.time}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

const cal = StyleSheet.create({
  main: {
    width: 80,
    // elevation: 3,
    // backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // cornerRadius: 5,
    // opacity: 0.2,
  },
  topSection: {
    backgroundColor: '#e36464',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  topHooks: {
    flexDirection: 'row',
    marginTop: -3,
    justifyContent: 'space-around',
  },
  monthRow: {
    flexDirection: 'row',
  },
  monthText: {
    fontSize: Fonts.large,
    color: Colours.contrast,
    fontWeight: '600',
  },
  dotRow: {
    flexDirection: 'row',
  },
  topBody: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  year: {
    fontSize: Fonts.xss,
    color: Colours.revPrimaryText,
  },
  time: {
    fontSize: Fonts.xss,
    fontWeight: 'bold',
    color: Colours.primaryText,
  },
  bold: {
    fontWeight: 'bold',
  },
  bottomSection: {
    backgroundColor: '#e7e7e7',
    height: 50,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  bottomMainDate: {
    fontSize: Fonts.xl28,
    textAlign: 'center',
    marginRight: 5,
    color: Colours.primaryText,
  },
  weekday: {
    fontSize: Fonts.xl,
    textAlign: 'center',
    color: Colours.primaryText,
  },
});

export default Calender;
