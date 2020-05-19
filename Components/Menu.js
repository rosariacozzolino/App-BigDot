/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Animated,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import {colors} from '../Utill/colors';

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
            <View style={{flex: 1}}>
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
                <View style ={styles.items, styles.itemSelected} >
                    <Text style={styles.text}>Home</Text>
                </View>
                <View style ={styles.noSelectedItems} >
                    <Text style={styles.text}>Home</Text>
                </View>
                <View style ={styles.noSelectedItems} >
                    <Text style={styles.text}>A</Text>
                </View>
                <View style ={styles.noSelectedItems} >
                    <Text style={styles.text}>b</Text>
                </View>
                <View style ={styles.noSelectedItems} >
                    <Text style={styles.text}>c</Text>
                </View>
                <View style ={styles.noSelectedItems} >
                    <Text style={styles.text}>d</Text>
                </View>
                <View style ={styles.noSelectedItems} >
                    <Text style={styles.text}>e</Text>
                </View>
                <View style ={styles.noSelectedItems} >
                    <Text style={styles.text}>f</Text>
                </View>
                <View style ={styles.noSelectedItems} >
                    <Text style={styles.text}>g</Text>
                </View>
                <View style ={styles.noSelectedItems} >
                    <Text style={styles.text}>h</Text>
                </View>
                <View style ={styles.noSelectedItems} >
                    <Text style={styles.text}>i</Text>
                </View>
            </ScrollView>
            </View>
            
        </View>
    )
  }
}

const styles = StyleSheet.create({
    menu: {
        flex: 1,
        width: width,
        height: height,
        backgroundColor: colors.mainVerde,
    },
    avatarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width / 2 + 70,
        borderColor: 'black',
        borderBottomWidth: 3,
        paddingHorizontal: 20,
        paddingVertical: 20,
    },
    avatar: {
        width: 60,
        height: 60,
        marginRight: 20,
    },
    avatarImage: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        color: 'grey',
        fontSize: 15,
    },
    textWithIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 20,
        borderColor: 'black',
        borderBottomWidth: 3,
    },
    withIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scrollContainer: {
        width: width / 2 + 70,
    },
    rightIcon: {
        paddingRight: 20,
    },
    iconWithText: {
        marginRight: 10,
        paddingLeft: 20,
    },
    items: {
        paddingVertical: 15,
        paddingLeft: 20,
        marginTop: 5,
    },
    itemSelected: {
        borderLeftWidth: 5,
        borderColor: 'yellow',
        paddingLeft: 5,
    },
    noSelectedItems: {
        paddingVertical: 15,
        paddingLeft: 25,
        marginTop: 5,
    },
    container: {
      backgroundColor: colors.mainVerde,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Menu;
