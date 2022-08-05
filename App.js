import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInForm from './components/SignInForm/SignInForm';
import ToDos from './components/ToDos/ToDos';
import palette from './styles/palette';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerTitleStyle: { color: palette.highlightOnSecond } }}>
        <Stack.Screen name="Sign In" component={SignInForm}></Stack.Screen>
        <Stack.Screen name='ToDos' component={ToDos}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
