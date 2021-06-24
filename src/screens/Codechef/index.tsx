import React, { FC } from 'react';
import { FlatList, StyleSheet, View, Text } from 'react-native';
import ContestCard, { IContestData } from '../../components/ContestCard';
import { CodeChefContests } from './interface';
import { Contest, DEFAULT_CC_CONTEST } from './constants';
import { fetchContests } from './api';
import { useQuery } from 'react-query';

interface Props {
  contestType?: Contest;
}

const Codechef: FC<Props> = ({ contestType = Contest.Present }) => {
  const { data, isLoading, isSuccess, isError } = useQuery<CodeChefContests>('codechef', fetchContests);
  const contests = !!data ? data : DEFAULT_CC_CONTEST;

  const renderContests = (contests: IContestData[]) => {
    return (
      <FlatList
        data={contests}
        keyExtractor={item => item.contestName}
        renderItem={({ item }) => <ContestCard {...item} />}
      />
    );
  };

  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Data is being loaded...</Text>
        </View>
      )}
      {isError && (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Error occured while fetching</Text>
        </View>
      )}
      {isSuccess && (
        <>
          {contestType === Contest.Present && renderContests(contests.presentContests)}
          {contestType === Contest.Future && renderContests(contests.futureContests)}
          {contestType === Contest.Past && renderContests(contests.pastContests)}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    marginBottom: 150, // to get the list from bottom
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
});

export default Codechef;
