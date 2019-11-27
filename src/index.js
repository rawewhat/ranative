import { Navigation } from 'react-native-navigation'
//import MainScreen from './screens/Main'
import { AppScreen } from './screens'

Navigation.registerComponent(`navigation.app.AppScreen`, () => AppScreen)
//Navigation.registerComponent(`navigation.app.MainScreen`, () => MainScreen)

Navigation.events().registerAppLaunchedListener(() => {
  // noinspection JSIgnoredPromiseFromCall
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'navigation.app.AppScreen',
            },
          },
        ],
        options: {
          topBar: {
            visible: false,
          },
        },
      },
    },
  })
})
