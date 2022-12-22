import React from 'react'
import Grid from './Component/Grid/Grid.component'
import Navigation from './Component/Navigation/Navigation.component'
import Search from './Component/Search/Search.component'

const App = () => {
  return (
    <div>
      <Navigation/>
      <Search/>
      <Grid/>
    </div>
  )
}

export default App