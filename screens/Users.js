
import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, FlatList,Image, TextComponent } from 'react-native';

export class Users extends Component{
    render () {
        return(
            <View style ={style.fila}>
             <Text>Estas en la pagina de usuarios</Text>
            </View>
            )
    }
}

const style= StyleSheet.create({
    fila:{
        flex:1,
        borderColor:"black",
        borderWidth:1,
    }
})