import React, { FC, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { BorderColor, Colours } from '../../global/Colors';
import { Fonts } from '../../global/Fonts/Size';

interface Props {
  defaultTab: Tab['name'];
  tabs: Tab[];
}

interface Tab {
  name: string;
  title: string;
  child: JSX.Element;
}

const Tabs: FC<Props> = ({ defaultTab, tabs }) => {
  const [activeTab, setActive] = useState<Props['defaultTab']>(defaultTab);

  const handleTouch = name => {
    setActive(name);
  };

  return (
    <View>
      {/* Heading */}
      <View style={styles.container}>
        {tabs.map(elem => {
          const btnStyle = elem.name === activeTab ? { ...styles.tab, ...styles.activeTab } : styles.tab;
          return (
            <Pressable style={btnStyle} onPress={() => handleTouch(elem.name)} key={elem.name}>
              <Text style={styles.tabText}>{elem.title}</Text>
            </Pressable>
          );
        })}
      </View>
      {/* Body */}
      {tabs.find(elem => elem.name === activeTab)?.child}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colours.secondary,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  tab: {
    // backgroundColor: '#f14d23',
    paddingVertical: 15,
    width: '33.3%',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: BorderColor.border1,
    // flexDirection: 'row',
    // paddingHorizontal: 40,
    // flex: 1,
  },
  tabText: {
    fontSize: Fonts.large,
  },
  activeTab: {
    borderBottomWidth: 3,
    fontWeight: 'bold',
    borderColor: Colours.primary,
    backgroundColor: Colours.baseBackground,
  },
});

export default Tabs;
