import React from 'react'
import {
  Scene,
  Router,
  Stack
} from 'react-native-router-flux'

import Home from '../Containers/Home'
import News from '../Containers/News'
import DetailNews from '../Containers/DetailNews'

/**
 * key is the variable we used to call the container (can be pop, push, reset, etc)
 * title shown in the middle of the header
 * component is the where we set the container
 * hideNavBar always set to true because we set the header in the container itself to make it more dynamic
 */

const Navigation = () => (
  <Router>
    <Stack
      hideNavBar={false}
      key='root'
      titleStyle={{ alignSelf: 'center' }}
    >
      <Scene
        key='home'
        title=''
        hideNavBar
        component={Home}
      />
      <Scene
        key='news'
        title=''
        hideNavBar
        component={News}
      />
      <Scene
        key='detailnews'
        title=''
        hideNavBar
        component={DetailNews}
      />
    </Stack>
  </Router>
)

export default Navigation
