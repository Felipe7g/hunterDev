import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import main from './pages/main';
import profiles from './pages/profiles';

const Routes = createAppContainer(
    createStackNavigator({
  main: {
        screen: main,
        navigationOptions: {
          headerTitleAlign: 'center',
          title: 'HunterDev'
        },
      },
      profiles: {
        screen: profiles,
        navigationOptions: {
          title: 'Perfil do GitHub'
        }
      },
    }, {
      defaultNavigationOptions: {
        headerTintColor: '#FFF',
        headerBackTitle: null,
        headerStyle: {
          backgroundColor: '#7D40E7',
        },
      },
    
    })
);

export default Routes;

