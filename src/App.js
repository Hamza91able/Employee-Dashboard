import React from 'react';

//Util
import firebase from './util/firebase';

//Screens
import Appbar from './screens/Appbar';
import Tabs from './screens/Tabs';
import Login from './screens/Login';

class App extends React.Component {

  state = ({
    hideLogin: true,
    selectedOptionTable: '',
  })

  changeSelectedOptionTable = shift => {
    this.setState({
      selectedOptionTable: shift,
    })
  }

  hideLogin = () => {
    this.setState({
      hideLogin: true,
    })
  }

  componentWillMount() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.hideLogin();
      } else {
        this.setState({
          hideLogin: false,
        })
      }
    });
  }

  render() {
    const { hideLogin, selectedOptionTable } = this.state;

    return (

      <React.Fragment>
        <Appbar />
        {hideLogin && <Tabs changeSelectedOptionTable={this.changeSelectedOptionTable} selectedOptionTable={selectedOptionTable}/>}
        {!hideLogin && <Login hideLogin={this.hideLogin} />}
      </React.Fragment>
    );
  }


}

export default App;
