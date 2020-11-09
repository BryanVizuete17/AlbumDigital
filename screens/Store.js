
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, FlatList,Image, TextComponent } from 'react-native';

export class Store extends Component{
    render () {
        return(
            <View style={style.fila}>
            <Text>Estamos en la pagina de store</Text>
            </View>
        )
    }
}

const style = StyleSheet.create({
    fila:{
        flex:1,
        borderColor:"black",
        borderWidth:1,
    }
})