import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
const styles = StyleSheet.create ({
    container:{
      flex:1,
      height:height,
      width:width,
    },
    text:{
      fontSize:15,
      fontWeight:400,
    },
    title:{
      color:'#A044FF',
      fontWeight:500,
      fontSize:16,
    },
    modalBackGround: {
        flex: 1,
        //backgroundColor:'yellow',
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
      },
      modalContainer: {
        width: wp('80%'),
        backgroundColor: 'white',
        //backgroundColor:'yellow',
        paddingHorizontal: 20,
        paddingVertical: 30,
        //borderRadius: 20,
        elevation: 20,
      },
      header: {
        width: '100%',
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center',
        //backgroundColor:'pink'
      },
      arrow:{
        position:'absolute',
        padding:5,
        paddingRight:5,
        //backgroundColor:'red',
        //left:wp('10%'),
        right:wp('2%'),
        //width:wp('40%'),
        //paddingLeft:wp('4%'),
        float:'right'
      },
});
export default styles;