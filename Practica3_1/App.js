import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { GluestackUIProvider, Box, Text, Button } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import ContenedorPrincipal from './containerD';

const Drawer = createDrawerNavigator();

function DemoScreen() {
  return (
    <Box flex={1} justifyContent="center" alignItems="center" bg="$backgroundLight100">
      <ContenedorPrincipal>
      </ContenedorPrincipal>
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
            drawerStyle: { backgroundColor: '#6c00c4ff', width: 240 },
            headerShown: true,
            drawerLabelStyle: { fontSize: 18 },
          }}
        >
          <Drawer.Screen
            name="Demo"
            component={DemoScreen}
            options={{ title: 'Oliver Moises Castro Montante' }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </GluestackUIProvider>
  );
}
