import { createStackNavigator } from '@react-navigation/stack';
import { ScreenBotones } from '../screens/ScreenBotones';
import { Screen1 } from '../screens/Screen1';
import { Screen2 } from '../screens/Screen2';
import { ScreenMayor } from '../screens/ScreenMayor';
import { ScreenMenor } from '../screens/ScreenMenor';

// nombres de las rutas
export type RootStackParamList = {
    ScreenButtons: undefined;
    Screen1: undefined;
    Screen2: undefined;
    ScreenMayor: undefined;
    ScreenMenor: undefined;
  };
  
const Stack = createStackNavigator<RootStackParamList>();
export function NavigatorStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenButtons" component={ScreenBotones} />
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="ScreenMayor" component={ScreenMayor} />
      <Stack.Screen name="ScreenMenor" component={ScreenMenor} />
    </Stack.Navigator>
  );
}