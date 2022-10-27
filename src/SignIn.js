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
  const SignIn = () => {
    return(
        <SafeAreaView>
        <View style={styles.view}>

        <View >
            <View style={{ right:90,top:100}}>
                <Text style={styles.heading}>Sign In</Text>
            </View>
            <View style={{ right:90,top:100}}>
                <Text style={styles.caption}>We Missed you</Text>
            </View>

            <View style={{flexDirection:'column'}}>
            <View style={{ top:120, width:55, paddingTop:6, paddingBottom:10}}>
                <Text style={{}}>Email</Text>
            </View>
            <View style={{
                backgroundColor:'#EDF1FF',
                width:300,
                height:37,
                top:115,
                left:10,
                borderRadius:5,
                flexDirection: "row",
                alignItems: "center",
                borderRadius:6,
                }}>
                
            <TextInput
                placeholder='Email'
                style={{  paddingLeft: 20, fontSize: 15,color: 'rgba(131, 142, 161, 0.5)', }}
                />
                </View>
                </View>

                <View style={{flexDirection:'column'}}>
            <View style={{ top:120, width:75, paddingTop:6, paddingBottom:10,paddingLeft:5}}>
                <Text style={{}}>Password</Text>
            </View>
            <View style={{
                backgroundColor:'#EDF1FF',
                width:300,
                height:37,
                top:115,
                left:10,
                flexDirection: "row",
                alignItems: "center",
                borderRadius:6,
                }}>
                
            <TextInput
                placeholder='Password'
                style={{  paddingLeft: 20, fontSize: 15,color: 'rgba(131, 142, 161, 0.5)', }}
            />
            </View>
            <View style={styles.forget}>
            <Text style={{color:' #2A84F2',fontSize:14,fontWeight:400,}}> Forget Password?
            </Text>
            </View>
            </View>

            <View style={{width:300, height:37, top:135,left:10, borderRadius:6}}>
            <Button
            title="Sign in"
            style={styles.button}
            />
            </View>
            

        </View>
        </View>
        </SafeAreaView>
    );
  };
  export default SignIn;
  const styles = StyleSheet.create({
    heading:{
        //position:'absolute',
        //width:500,
        height:54,
        top:300,
        fontSize:36,
        fontWeight:500, 
        //left:10,
        //paddingLeft:4,
        color:'#3A456E',
        right:90,  
    },
    caption:{
        //position:'absolute',
        color:'rgba(131, 142, 161, 0.5)',
        
    },
    title:{
        width:45,
        height:27,
        top:32,
        //left:220,
        color: '#3A456E',
    },
    input:{
        //width:342,
        height:52,
        //top:200,
        color:'#F3F4F8',
    },
    view:{
        //flex:1,
        //backgroundColor:'yellow',
        height:500,
        width:330,
        //borderWidth:1,
        top:50,
        //position:'fixed'
    },
    forget:{
        top:120, 
        width:130,
        paddingTop:10,
        fontSize:14, 
        fontWeight:400,
        color:' #2A84F2'
        //backgroundColor:'yellow'

    },
    button:{
       
    },
  }) 