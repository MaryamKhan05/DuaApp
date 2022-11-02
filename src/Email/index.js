import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image} from 'react-native';
const {width,height}=Dimensions.get('window');
import styles from './styles';



const Email =()=>{
    return(
        <View  style ={styles.container}>
            {/* <Text>hello reset</Text> */}
            <View style={styles.view}>
                <View>
                    <Image
                    style={styles.image}
                    source={require('../../assets/email (2).png')}
                    />
                </View>
            <View style={{padding:wp('2%'),}}>
                <Text style={styles.purple}>Verify your email address to complete your registration</Text>
            </View>
            <View style={{padding:wp('2%')}}>
                <Text style={styles.text}>Hi Muhammad Ali</Text>
            </View>
            <View style={{padding:wp('2%')}}>
                <Text style={styles.bold}>Welcome to Dua App</Text>
            </View>
            <View style={{padding:wp('2%')}}>
                <Text style={styles.text}>Please verify your email address to complete your registration to continue</Text>
            </View>
            <View style={{justifyContent:'center', alignSelf:'center', padding:hp('2%')}}>
            <TouchableOpacity
             style={styles.button}>
                 <Text style={styles.buttontxt}>Verify Email </Text>
            </TouchableOpacity>
            </View>
            <View style={{paddingLeft:wp('2%')}}>
                <Text style={styles.text}>Thanks for your time</Text>
            </View>
            <View style={{paddingLeft:wp('2%')}}>
                <Text style={styles.bold}>Dua App Team</Text>
            </View>
            <View>
            </View>
            </View>
        </View>
    );
};
export default Email;