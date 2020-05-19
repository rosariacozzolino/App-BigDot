/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../Utill/colors';

const BellButton = (props) => {
  return (
        <View style={styles.container} >
          <TouchableOpacity >
            <FontAwesome5
            name={'bell'}
            style={styles.headerbar} />
          </TouchableOpacity>
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
});

export default BellButton;
