import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
    container:{
        backgroundColor:'yellow',
        flex:1,
        height:height,
        width:width,
        //width:wp('90%'),
        //height:hp('90%'),
        justifyContent:'center',
        alignContent:'center',
        alignSelf:'center' ,
    },
    image:{
        //borderWidth:1,
        width:wp('35%'),
        height:hp('35%'),
        //marginTop:30,
        alignSelf:'center',
    },
    view:{
        //marginLeft:30,
        padding:wp('2%'),
       // paddingTop:hp('10%'),
        backgroundColor:'pink',
        width:wp('90%'),
        height:hp('90%'),
        alignSelf:'center',    
    },
    purple:{
        color:'#A044FF',
        fontWeight:500,
        fontSize:18,
    },
    text:{
        fontWeight:400,
        fontSize:16,
        color:'#0F0702',
    },
    bold:{
        fontWeight:500,
        fontSize:16,
        color:'#0F0702',
    },
    button:{
        backgroundColor:'#A044FF',
        borderRadius:10,
        padding:10,
        justifyContent:'center',
        alignContent:'center',
        width:wp('70%'),
        height:hp('7%'),
    },
    buttontxt:{
        color:'white',
        padding:3,
        alignSelf:'center'
    },

});
export default styles;