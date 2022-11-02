import * as React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions, Button, Image, TextInput} from 'react-native';
const {width,height}=Dimensions.get('window');
import styles from './styles';

const NewPassword =()=>{
    return(
        <View style={styles.container}>
            <View style={styles.view}>
            <View style={{paddingTop:20}}>
                <View style={{flexDirection:'row'}}>
                <View style={{paddingRight:10}}>
                <Image
                style={styles.image}
                source={require('../../assets/lock.png')}
                />
                </View>
                <Text style={styles.text}>Enter New Password</Text>
                </View>
            </View>
            <View style= {{flexDirection:'row'}}>
                <TextInput
                style={styles.input}
                />
                <Image
                style={styles.eye}
                source={require('../../assets/eye.png')}
                />
            </View>
            <View style={{paddingTop:20}}>
                <View style={{flexDirection:'row'}}>
                <View style={{paddingRight:10}}>
                <Image
                style={styles.image}
                source={require('../../assets/lock.png')}
                />
                </View>
                <Text style={styles.text}>Confirm Password</Text>
                </View>
            </View>
            <View>
                <TextInput
                style={styles.input}
                />
               
            </View>
            
            <View style={{ justifyContent:'center', alignSelf:'center',padding:hp('3%')}}>
                        <TouchableOpacity
                        style={styles.button}>
                            <Text style={styles.buttontxt}>Sign Up</Text>
                        </TouchableOpacity>
            </View>
            </View>
        </View>
    );
};
export default NewPassword;