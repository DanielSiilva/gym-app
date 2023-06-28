import { StatusBar, View } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { THEME } from './src/theme';

import {AuthContext} from '@contexts/AuthContext';

import { Loading } from '@components/Loading';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        translucent
      />
      <AuthContext.Provider value={{
        user:{
          id: '1',
          name: 'Daniel',
          email: 'danielsousa@gmail.com',
          avatar: 'daniel.png'
        }
      }}>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}