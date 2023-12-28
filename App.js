
import { StatusBar } from 'expo-status-bar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './components/Home';

export default function App() {
  const Drawer = createDrawerNavigator();
  
  return (
          <NavigationContainer>
                  <Drawer.Navigator initialRouteName='HOME'>              
                          <Drawer.Screen name='HOME' component={Home} />
                          <Drawer.Screen name="LOGIN" component={Login} />
                          <Drawer.Screen name="SIGNUP" component={SignUp} />
                  </Drawer.Navigator>  
          </NavigationContainer>         
  );
}

