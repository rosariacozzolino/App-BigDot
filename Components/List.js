/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    Image,
} from 'react-native';

const show_first = [
    {
        key: 1,
        name:'Latte',
        image: 'https://img.sanistatic.it/image/gallery//calcio/1.jpg',
    },
    {
        key: 2,
        name:'Latte',
        image: 'https://img.sanistatic.it/image/gallery//calcio/2.jpg',
    },
    {
        key: 3,
        name:'Latte',
        image: 'https://img.sanistatic.it/image/gallery//calcio/3.jpg',
    },
    {
        key: 4,
        name:'Latte',
        image: 'https://img.sanistatic.it/image/gallery//calcio/6.jpg',
    },
    {
        key: 5,
        name:'Latte',
        image: 'https://img.sanistatic.it/image/gallery//calcio/7.jpg',
    },
];

const show_second = [
    {
        key: 1,
        name:'Latte',
        image: 'https://img.sanistatic.it/image/gallery//calcio/1.jpg',
    },
    {
        key: 2,
        name:'Latte',
        image: 'https://img.sanistatic.it/image/gallery//calcio/2.jpg',
    },
    {
        key: 3,
        name:'Latte',
        image: 'https://img.sanistatic.it/image/gallery//calcio/3.jpg',
    },
    {
        key: 4,
        name:'Latte',
        image: 'https://img.sanistatic.it/image/gallery//calcio/6.jpg',
    },
    {
        key: 5,
        name:'Latte',
        image: 'https://img.sanistatic.it/image/gallery//calcio/7.jpg',
    },
];

class List extends Component {
    _renderItem(item){
        return (
            <Image style={{width: 300, height: 300}} source={{uri: item.image}}/>
        );
    }

    render(){
        return (
            <View style={{flex: 1}}>
                <View>
                    <Text style={styles.text} >My List</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={{width: 5}}  />}
                        renderItem={({item}) => this._renderItem(item)}
                        data={show_first} />
                </View>
                <View>
                    <Text style={styles.text} >My Second List</Text>
                    <FlatList
                        horizontal
                        ItemSeparatorComponent={() => <View style={{width: 5}}  />}
                        renderItem={({item}) => this._renderItem(item)}
                        data={show_second} />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
      color: 'white',
    },
  });
  
export default List;
