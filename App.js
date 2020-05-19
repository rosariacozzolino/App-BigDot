import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableHighlightBase} from 'react-native';

import SideMenu from 'react-native-side-menu';
import Header2 from './Components/HeaderVariant';
import Menu from './Components/Menu';
import List from './Components/List';
import Header from './Components/Header';
import HeaderLogo from './Components/HeaderLogo';
import {colors} from './Utill/colors';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenu(isOpen) {
    this.setState({isOpen});
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <SideMenu
          menu={<Menu />}
          isOpen={this.state.isOpen}
          onChange={(isOpen) => this.updateMenu(isOpen)}>
          <View style={[{flex: 1}, styles.container]}>
            <Header2 toggle={this.toggle.bind(this)} />
            <List />
          </View>
        </SideMenu>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
