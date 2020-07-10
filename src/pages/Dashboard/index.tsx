import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import AuthContext from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const {signOut} = useContext(AuthContext);

  // console.log(signed);
  // console.log(user);

  const handleSignOut = async () => {
    signOut();
  };

  return (
    <View style={styles.container}>
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
