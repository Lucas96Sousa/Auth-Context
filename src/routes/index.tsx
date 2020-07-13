import React, {useContext} from 'react';
import {View, ActivityIndicator} from 'react-native';

import {useAuth} from '../hooks/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

const Routes: React.FC = () => {
  const {signed, loading} = useAuth();
  /*
  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#002699" />
      </View>
    );
  } */

  // Funcao de loading em loop - corrigir

  return signed ? <AppRoutes /> : <AuthRoutes />;
};

export default Routes;
