import React from 'react';
import { SafeAreaView, StyleSheet, useColorScheme } from 'react-native';

import { QueryClient, QueryClientProvider } from 'react-query';
import Dashboard from './src/screens/Dashboard';

const queryClient = new QueryClient();
// const Tab = createBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={styles.background}>
      <QueryClientProvider client={queryClient}>
        <Dashboard />
        {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      </QueryClientProvider>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    // backgroundColor: Colors.baseBackground,
  },
});

export default App;
