import React from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Dimensions,
    ScrollView,
    TextInput,
    Button
  } from 'react-native';
  const Card = () => {
    return(

    <View style={{height:500,width:350, justifyContent:'center',alignContent:'center',}}>
        <View style={styles.card}>

            <View style={{flexDirection:'row', }}>
            <View style={{padding:6}}>
            <View style={{height:90,width:90,backgroundColor:'#F3F4F8', paddingLeft:10,radius:5}}>
            </View>
            </View>

            <View style={{height:90,width:90,paddingRight:5 }}>
                
                <View style={{flexDirection:'column'}}>
                    <View style={{}}>
                    <Text style={styles.text}>Mercedes-Benz</Text>
                    </View>
                    <View style={{}}>
                    <Text style={styles.caption}>Mercedes-Benz</Text>
                    </View>
                    
                    <Text></Text>
                    <View style={styles.cardbtn}>

                    </View>
                </View>
            </View>
            
            <View style={{height:90, width:90,paddingLeft:10,paddingRight:10}}>
            <View style={{flexDirection:'column'}}>
                    <View style={{}}>
                    <Text style={styles.text}>Mercedes-Benz</Text>
                    </View>
                    <View style={{}}>
                    <Text style={styles.caption}>Mercedes-Benz</Text>
                    </View>
                    
                    <Text></Text>
                    <View style={styles.cardbtn}>

                    </View>
                </View>

            </View>
            </View>
        </View>
    </View>
    );
  };
  export default Card;
  const styles = StyleSheet.create({
    card:{
        height:150,
        width:320,
        borderRadius:5,
        backgroundColor:'white', 
        top:150, 
        shadowOpacity:0.5,
        shadowColor: `rgba(42, 132, 242, 0.06)`,
        shadowOffset: {
            width: 10,
            height: 10,
            },
        shadowRadius: 3.84,
        elevation: 5,
        //borderWidth:1, 
        padding:15,
    },
    cardbtn:{
        width:65,
        height:20,
        top:30,
        radius:4,
        left:10,
        backgroundColor:'rgba(42, 132, 242, 0.3)'
    },
    text:{
        width:100,
        height:21,
        //left:50,
        top:18,
        fontSize:14,
        fontWeight:400,
        fontStyle:'normal',
        color:'#3A456E',
        //borderWidth:1,
    },
    caption:{
        color:'#838EA1',
        fontWeight:'400',
        fontSize:10,
        lineHeight:14,

    },
  }) 