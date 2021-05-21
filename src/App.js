import { HomeScreen } from './Component/HomeScreen'
import React from "react"
import { Route, Switch } from 'react-router'
import { StartingScreen } from './Component/StartingScreen';

function App() {
  
  return (
    <div>
       <Switch>
          <Route path="/" exact>
              <HomeScreen />
          </Route>
          <Route path="/starting">
              <StartingScreen />
          </Route>
       </Switch>
    </div>
  );
}

export default App;
