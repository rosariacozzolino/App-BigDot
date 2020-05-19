/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import HomeButton from '../Components/HomeButton';
import MenuButton from '../Components/MenuButton';
import BellButton from '../Components/BellButton';
import UserTagButton from '../Components/UserTagButton';
import PreferButton from '../Components/PreferButton';
import {colors} from '../Utill/colors';

const Header = (props) => {
  return (
    <View style={styles.header}>
          <HomeButton style={styles.headerbarcomponent} />
          <PreferButton style={styles.headerbarcomponent} />
          <UserTagButton style={styles.headerbarcomponent} />
          <BellButton style={styles.headerbarcomponent} />
          <MenuButton style={styles.headerbarcomponent}  />
        </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 80,
    backgroundColor: 'black',
    borderEndColor: 'red',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
  headerbarcomponent: {
    paddingBottom: 40,
  },
});

export default Header;
