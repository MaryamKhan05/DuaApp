import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('window')
const Test = () => {
    return(
    <View style={styles.container}>
        <View style={styles.navigation}>
        <TouchableOpacity
        style={styles.button}
        >
            <Text>All messages</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        >
            <Text>Unread</Text>
        </TouchableOpacity>
        <TouchableOpacity
        style={styles.button}
        >
            <Text>Deleted</Text>
        </TouchableOpacity>
      </View>

    </View>
      
    );
};
const styles = StyleSheet.create({
    container:{
        width:width,
        height:height,
        //backgroundColor:'yellow'
    },
    navigation:{
        flexDirection:'row', 
        //backgroundColor:'pink',
        top:30,
        margin:10,
        //justifyContent:'space-between',
    },
    button: {
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderRadius: 4,
        //backgroundColor: "oldlace",
        alignSelf: "center",
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "20%",
        textAlign: "center",
       // width:width/4
      },
})

export default Test;

