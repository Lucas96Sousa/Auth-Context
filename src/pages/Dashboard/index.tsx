import React from 'react';
import {View, Button, Text, StyleSheet} from 'react-native';
import {useAuth} from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const {user, signOut} = useAuth();

  const handleSignOut = async () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <Text>{user?.name}</Text>
      <Button title="Sign Out" onPress={handleSignOut} />
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
