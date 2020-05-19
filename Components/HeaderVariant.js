/* eslint-disable prettier/prettier */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableWithoutFeedback,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Header2 = props => (
    <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
            <Icon
                 name={'bars'}
                 style={styles.headerbar}
            />
        </TouchableWithoutFeedback >
        <Image style={styles.logo} source={require('../Assets/Deloittewhite.png')} />
        <TouchableWithoutFeedback onPress={() => props.toggle()}>
          <Icon
                 name={'bars'}
                 style={styles.headerbar}
            />
        </TouchableWithoutFeedback>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: 'black',
      paddingHorizontal: 15,
      width: '100%',
    },
    headerbar: {
      color: 'white',
      fontSize: 40,
      padding: 25,
    },
    logo: {
        width: 180,
        height: 40,
        backgroundColor: 'black',
    },
  });

export default Header2;
