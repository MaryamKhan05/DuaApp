import * as React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
    container:{
        //backgroundColor:'yellow',
        flex:1,
        height:height,
        width:width,
        justifyContent:'center',
        alignContent:'center',  
    },
    card:{
        backgroundColor:'#fff',
        //backgroundColor:'yellow',
        top:'10%',
        justifyContent:'center',
        alignContent:'center',
        width:width,
        height:50,    
    },
    text:{
        //backgroundColor:'yellow',
        fontSize:14,
        fontWeight:400,
        width:100,
        //padding:30, 
        //top:20,
    },
    flag:{
        padding:30,
        left:34,
        //top:20
    },
});