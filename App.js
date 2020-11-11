import React, { useState } from 'react';

import * as Font from "expo-font";
import { AppLoading } from "expo";
import WelcomeScreen from "./app/screen/WelcomeScreen";

const getFonts = () => Font.loadAsync({
    "nunito-regular": require("../PostmanTracker/app/assets/fonts/Nunito-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
    <WelcomeScreen>
    </WelcomeScreen>
    );
  } else {
    return (
      <AppLoading 
      startAsync={getFonts} 
      onFinish={() => setFontsLoaded(true)}
      />
    )
  }
}
