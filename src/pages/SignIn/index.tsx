import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {useAuth} from '../../hooks/auth';

const SignIn: React.FC = () => {
  const {signed, user, signIn} = useAuth();

  console.log(signed);
  console.log(user);

  const handleSignIn = async () => {
    signIn();
  };

  return (
    <View style={styles.container}>
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
