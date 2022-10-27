import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, StatusBar,TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
import { TabView, SceneMap,TabBar } from 'react-native-tab-view';

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor:'#A044FF',
      justifyContent:'center',
      alignContent:'center',
      paddingTop:10,
      height:hp('10%'),
      width:width,
    },
    form:{
        backgroundColor:'#fff',
        alignSelf:'center',
        //borderRightWidth:10,
        //borderLeftWidth:10,
        width:width,
        height:hp('85%'),
        top:hp('10%'),
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
    },
    text:{
        width:126,
        height:45,
        fontWeight:500,
        fontSize:30,
        color:'#FFFFFF',
        paddingTop:10,
    },
    caption:{
        width:254,
        height:21,
        fontSize:14,
        fontWeight:400,
        color:'#FFFFFF',
        paddingTop:5,
    },
    })
export default styles;