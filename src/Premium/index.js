import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput,ImageBackground} from 'react-native';
import Modal from 'react-native-modal';
const {width,height}=Dimensions.get('window');
import styles from './styles.js';

const Premium =()=>{
    return(
        <View style={styles.container}>
            {/* <Text>hello Premium</Text> */}
            <ImageBackground 
            source={require('../../assets/premium.png')} 
            style={{width:width, height:height}}>
                <View style={{backgroundColor: 'rgba(0,0,0,0.5)',height:height,width:width, }}>
                <View style={{ padding:20, justifyContent:'center'}}>
                <Image
                source={require('../../assets/cross.png')}
                style={{height: 30, width: 30, alignSelf:'flex-end',}}
                />
                </View>
                <View style={{ padding:20, justifyContent:'center',paddingTop:hp('40%'), padding:hp('5')}}>
                <Image
                source={require('../../assets/quran.png')}
                style={{height: 83, width: 119, alignSelf:'center',}}
                />
                </View>
                <View style={{padding:hp('3')}}>
                    <Text style={styles.heading}>Get Premium Access</Text>
                </View>
                <View style={{ justifyContent:'center', alignItems:'center', flexDirection:'row'}}>
                <View style={{paddingLeft:wp('3'), paddingTop:hp('2'), paddingLeft:wp('5')}}>
                <Image
                source={require('../../assets/check.png')}
                style={{height: 23, width: 24,}}
                />
                </View>
                    <Text style= {styles.text}>Your purchase will help us fund projects of Quran and Hadith and books of children</Text>
                </View>
                </View>


            </ImageBackground>

        </View>
    );
};
export default Premium;