/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../Utill/colors';

const PreferButton = (props) => {
  return (
        <View style={styles.container} >
          <TouchableHighlight underlayColor = {'red'} style={[styles.buttonContainer, styles.bottomButton,
        styles.secondaryColor]} onPress={this.act}>
            <FontAwesome5
            name={'bookmark'}
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
  },
  button: {
      color: 'red',
  },
});

export default PreferButton;
