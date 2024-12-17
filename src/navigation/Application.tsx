import type { RootStackParamList } from '@/navigation/types';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';
import { Paths } from '@/navigation/paths';

import { Example, PlanSelection, SignIn, Startup } from '@/screens';

const Stack = createStackNavigator<RootStackParamList>();

function ApplicationNavigator() {
  const { navigationTheme, variant } = useTheme();

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={navigationTheme}>
        <Stack.Navigator
          initialRouteName={Paths.PlanSelection}
          key={variant}
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen component={Startup} name={Paths.Startup} />
          <Stack.Screen component={Example} name={Paths.Example} />
          <Stack.Screen component={SignIn} name={Paths.SignIn} />
          <Stack.Screen component={PlanSelection} name={Paths.PlanSelection} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default ApplicationNavigator;
