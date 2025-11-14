import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GluestackUIProvider, Box, Text, Button } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import ContenedorPrincipal from './containerD';
import ContenedorProfile from './containerF';
import DisplayS from './containerG';

const Drawer = createDrawerNavigator();

function DemoScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="$backgroundLight100">
      <ContenedorPrincipal>
      </ContenedorPrincipal>
    </Box>
  );
}
function ProfileScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="$backgroundLight100">
      <ContenedorProfile>
      </ContenedorProfile>
    </Box>
  );
}
function DisplayScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="$backgroundLight100">
      <DisplayS>
      </DisplayS>
    </Box>
  );
}

export default function App() {
  return (
    <GluestackUIProvider config={config}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Demo"
          screenOptions={{
            drawerStyle: { backgroundColor: '#ff92ceff', width: 240 },
            headerShown: true,
            drawerLabelStyle: { fontSize: 18 },
            headerPressColor: "#ff00f2ff",
            headerStyle: { backgroundColor: "#414141ff"},
            //headerBackground: "#fca6ffff",
          }}
        >
          <Drawer.Screen
            name="Demo"
            component={DemoScreen}
            options={{ title: 'Oliver Moises Castro Montante',headerTintColor:'#db7effff' , overlayColor:'#ff00aa3f', drawerActiveTintColor:'#ff00ffff', drawerActiveBackgroundColor:'#ffcaffff'}}
          />
          <Drawer.Screen
            name="Profile"
            component={ProfileScreen}
            options={{title: 'Profile',headerTintColor:'#db7effff' , overlayColor:'#ff00aa3f', drawerActiveTintColor:'#ff00ffff', drawerActiveBackgroundColor:'#ffcaffff'}}
          />
          <Drawer.Screen
            name="Display"
            component={DisplayS}
            options={{title: 'Display',headerTintColor:'#db7effff' , overlayColor:'#ff00aa3f', drawerActiveTintColor:'#ff00ffff', drawerActiveBackgroundColor:'#ffcaffff'}}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
