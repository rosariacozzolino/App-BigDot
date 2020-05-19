codice app.js prima di fare HeaderVariant


import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

import List from './Components/List';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <View style={[{flex: 1}, styles.container]}>
        <Header />
        <List />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});

export default App;


XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

side menu

/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('window');

class Menu extends Component {
  render() {
    return(
        <View style = {styles.menu} >
            <View style={styles.avatarContainer}>
                <View style={styles.avatarImage} >
                    <Image
                        style = {styles.avatar}
                        source={require('../Assets/1.png')}
                    />
                    <Text style = {styles.text}>Mario</Text>
                </View>
                <Icon
                    name={'exchange'}
                />
            </View>
            <ScrollView style={styles.scrollContainer}> 
                <View style={styles.textWithIcon}>
                    <View style={styles.withIcon}> 
                        <Icon
                            style={styles.iconWithText}
                            name={'download'}
                            color={'white'}
                            size={28}
                        />
                        <Text>My Download</Text>
                    </View>
                    <Icon
                        style={styles.rightIcon}
                        name={'angle-right'}
                        color={'white'}
                        size={25}
                    />
                </View>
                <View style={styles.textWithIcon}>
                    <View style={styles.withIcon}> 
                        <Icon
                            style={styles.iconWithText}
                            name={'md-checkmark'}
                            color={'white'}
                            size={28}
                        />
                        <Text>My List</Text>
                    </View>
                    <Icon
                        style={styles.rightIcon}
                        name={'angle-right'}
                        color={'white'}
                        size={25}
                    />
                </View>
            </ScrollView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
    },
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Menu;



XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX