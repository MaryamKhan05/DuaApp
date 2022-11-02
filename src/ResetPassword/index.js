import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image} from 'react-native';
const {width,height}=Dimensions.get('window');
import styles from './styles';



const Reset =()=>{
    return(
        <View  style ={styles.container}>
            {/* <Text>hello reset</Text> */}
            <View style={styles.view}>
                <View>
                    <Image
                    style={styles.image}
                    source={require('../../assets/reset.png')}
                    />
                </View>
            <View style={{padding:10,}}>
                <Text style={styles.purple}>Reset your password</Text>
            </View>
            <View style={{padding:10}}>
                <Text style={styles.text}>Hi Muhammad Ali</Text>
            </View>
            <View style={{padding:10}}>
                <Text style={styles.bold}>Welcome to Dua App</Text>
            </View>
            <View style={{padding:10}}>
                <Text style={styles.text}>You have requested a password reset on Tue, 19 Apr 2022 16:11:39 GMT. If you want to reset your password, please click the below button.</Text>
            </View>
            <View style={{justifyContent:'center', alignSelf:'center', padding:hp('1%')}}>
                        <TouchableOpacity
                        style={styles.button}>
                            <Text style={styles.buttontxt}>Reset Password</Text>
                        </TouchableOpacity>
            </View>
            <View style={{paddingLeft:10,}}>
                <Text style={styles.text}>Thanks for your time</Text>
            </View>
            <View style={{paddingLeft:10,}}>
                <Text style={styles.bold}>Dua App Team</Text>
            </View>
            <View>
            </View>
            </View>
        </View>
    );
};
export default Reset;