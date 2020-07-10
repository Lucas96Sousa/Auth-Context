import React, {useContext} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import {signIn} from '../../services/auth';
import AuthContext from '../../hooks/auth';

const SignIn: React.FC = () => {
  const {signed} = useContext(AuthContext);

  console.log(signed);
  const handleSignIn = async () => {
    const response = await signIn();

    console.log(response);
  };

  return (
    <View style={styles.container}>
      <Button title="SignIn" onPress={handleSignIn} />
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
