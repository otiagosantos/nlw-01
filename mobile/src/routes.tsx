import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Points from './pages/Points';
import Detail from './pages/Detail';

const AppStack = createStackNavigator(); // Vai "servir como roteamento" da aplicação.

const Routes = () => {
  return (
    // Como se fosse o BrowseRouter do ReactJS. Definindo como as rotas devem se
    //comportar e sempre devem estar por volta da aplicação.
    <NavigationContainer>
      <AppStack.Navigator
        headerMode="none"
        screenOptions={{ //opções que servem para todas as telas do app.
          cardStyle:{
            backgroundColor: '#f0f0f5'
          }
        }}
      >
        <AppStack.Screen name="Home" component={Home} />
        <AppStack.Screen name="Points" component={Points} />
        <AppStack.Screen name="Detail" component={Detail} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;