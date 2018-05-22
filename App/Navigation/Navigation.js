import React from 'react'
import {
  Scene,
  Router,
  Stack
} from 'react-native-router-flux'

import Home from '../Containers/Home'

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
    </Stack>
  </Router>
)

export default Navigation
