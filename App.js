import { StatusBar, SafeAreaView } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import * as SplashScreen from 'expo-splash-screen';

import { Cesta } from './src/pages/Cesta/Cesta';
import mockCesta from './src/mocks/MockCestas'

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fonteCarregadas] = useFonts({
    'MontserratRegular': Montserrat_400Regular,
    'MontserratBold': Montserrat_700Bold
  });

  if (!fonteCarregadas) {
    return SplashScreen.hideAsync();
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <Cesta {...mockCesta }/>
    </SafeAreaView>
  );
}


