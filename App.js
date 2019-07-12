import React, {Component} from 'react';
import AppContainer from './src/component/MainNavigation';
import { Provider } from 'react-redux'
import store from './src/store'
export default class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //   }
  // }
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}