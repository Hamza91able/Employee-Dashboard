import React from 'react';

//Util
import firebase from './util/firebase';

//Screens
import Appbar from './screens/Appbar';
import Tabs from './screens/Tabs';
import Login from './screens/Login';

function App() {

  return (
    <React.Fragment>
      <Appbar />
      {/* <Tabs /> */}
      <Login />
    </React.Fragment>
  );
}

export default App;
