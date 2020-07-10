import React from 'react';
import SignIn from '../pages/SignIn';

import {createStackNavigator} from '@react-navigation/stack';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Sign In" component={SignIn} />
  </AuthStack.Navigator>
);

export default AuthRoutes;
