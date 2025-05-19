import { useFonts } from 'expo-font';
import '@/global.css';
import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import * as SplashScreen from 'expo-splash-screen';

import { useEffect } from 'react';
import { SessionProvider } from '@/context/AuthContext';
import { Slot } from 'expo-router';
import '../global.css';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <SessionProvider>
      <GluestackUIProvider>
        <Slot />
      </GluestackUIProvider>
    </SessionProvider>
  );
}
