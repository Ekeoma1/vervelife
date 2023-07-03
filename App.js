import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Navigator from './src/screen/Navigator';

const App = () => {
  useEffect(()=> {
    SplashScreen.hide();
  },[])
  return <Navigator />;
};

export default App;
