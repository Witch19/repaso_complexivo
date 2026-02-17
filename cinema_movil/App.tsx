import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MovieCatalogScreen from "./src/screens/MovieCatalogScreen";
import ReservationEventsScreen from "./src/screens/ReservationEventsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Cartelera" component={MovieCatalogScreen} />
        <Stack.Screen name="Eventos" component={ReservationEventsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
