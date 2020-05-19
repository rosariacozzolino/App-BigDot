/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../Utill/colors';

const HomeButton = (props) => {
  return (
        <View style={styles.container} >
          <TouchableHighlight style = {[styles.buttonContainer, styles.bottomButton,
        styles.secondaryColor]} onPress={() => this.signupPressed()}>
            <FontAwesome5
            name={'home'}
            style={styles.headerbar} />
          </TouchableHighlight>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  headerbar: {
    color: 'white',
    fontSize: 40,
    padding: 25,
    backgroundColor: 'black',
  },
  buttonContainer:  {
    color: 'green',
  },
  bottomButton: {
    color: 'red',
  },
});

export default HomeButton;
