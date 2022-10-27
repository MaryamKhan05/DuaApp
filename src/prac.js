import * as React from 'react';
import { FlatList, Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
const {width,height}=Dimensions.get('window');

const Persons = [
    {
        "name": "Abdullah Hadley",
        "email": "abdullah.hadley@gmail.com",
        "position": "Marketing",
    },
    {
        "name": "Thomas Stock",
        "email": "thomas.stock@gmail.com",
        "position": "Product Designer",
    },
    {
        "name": "Veeti Seppanen",
        "email": "veeti.seppanen@gmail.com",
        "position": "Product Designer",
       
    },
    {
        "name": "Bonnie Riley",
        "email": "bonnie.riley@gmail.com",
        "position": "Marketing",
        
    }
]; 

const Practice = ()=>{
    
    return (
        <FlatList
        data={Persons}
        renderItem={({item})=>{
            console.log(item.name);
            //console.log(item.position);
            return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.title}>{item.name}</Text>
                    <Text style={styles.caption}>{item.position}</Text>

                </View>
                
            </View>
            ); 
        }}
        />
    );
};
const styles = StyleSheet.create({
container: {
// marginTop:30,
// padding:2,
//backgroundColor:'yellow',
flex:1,
width:width,
height:'95%',
backgroundColor:'rgb(128,128,128)',
justifyContent:'center',
alignItems:'center',
},
box:{
    backgroundColor:'#fff',
    borderRadius:5,
    padding:5,
    justifyContent:'center',
    alignItems:'center',
    width:'60%'
},
title:{
    fontSize:20,
    //fontWeight:50,
},
caption:{
    color:'rgb(128,128,128)',
    padding:3,
}
});

export default Practice;