import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserProfile from '../Pages/UserProfile';
import Auth from '../Pages/Auth';

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={UserProfile} />
        <Route path='auth' component={Auth} />
      </Switch>
    </div>
  );
}

export default App;
