/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

const HeaderLogo = (props) => {
    const Logo = require('../Assets/Deloittewhite.png');
  return (
    <View style={styles.header}>
        <Image resizeMode= "contain"  source={Logo} style={styles.Logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    borderEndColor: 'red',
  },
  Logo: {
    width: 145,
    height: 40,
  },
  container: {
    flexDirection: 'row',
  },
});

export default HeaderLogo;
