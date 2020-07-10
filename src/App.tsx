import React from 'react';

import {View, Text, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>Olá</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  body: {
    fontWeight: '500',
    fontSize: 24,
    color: '#ff9000',
  },
});
