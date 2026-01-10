import { useColorScheme } from '@/hooks/use-color-scheme';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Tabs } from 'expo-router';
import 'react-native-reanimated';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Tabs>
        <Tabs.Screen name="allocations" options={{title: 'Allocations',headerShown:false, tabBarIcon:({size,color})=> <MaterialIcons name="account-tree" size={size} color={color}/>}}/>
        <Tabs.Screen name="accounts" options={{title:'Acconts', tabBarIcon:({size,color})=> <MaterialIcons name="account-balance-wallet" size={size} color={color} />}} />

        <Tabs.Screen name='index' options={{ href:null}}/>
      </Tabs>
    </ThemeProvider>
  );
}
