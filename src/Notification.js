import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet,Dimensions } from "react-native";
const {width,height}=Dimensions.get('window')
const Notification = ({ item, onClickFunction }) => {
  const [layoutHeight, setLayoutHeight] = useState(0);
  const [Notification, setDirection] = useState("All messages");


  return (
    <PreviewLayout
      label="Notification"
      selectedValue={Notification}
      values={["All messages", "Unread", "Deleted"]}
      setSelectedValue={setDirection}
      style={{backgroundColor:'pink'}}
      >
        {/* <View><Text>hello</Text></View> */}
        
    </PreviewLayout>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  
    <View style={{ padding: 10, flex: 1 }}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    <View>
        <Text style={styles.text}>Today</Text>
    </View>

    <View style={{backgroundColor:'', height:'10%'}}>
    <View style={{flexDirection:'row'}}>
        
    </View>
    </View>
    <View style={{marginTop:25}}>
        {/* <Text style={styles.text}>Yesterday</Text> */}
    </View>

    <View style={{backgroundColor:'', height:'10%'}}>
    <View style={{flexDirection:'row'}}>
        
        
    </View>
    </View>
    </View>
    </View>
    
  
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
    //backgroundColor: "aliceblue",
    height:height,
    width:width,
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    //justifyContent:'center',
    marginLeft:15,
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
  selected: {
    backgroundColor: "#BBD2EC",
    borderWidth: 0,
    borderRadius:8,
    width:'25%'
    //opacity:0.5,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    
    color: "#808080",
  },
  selectedLabel: {
    color: "#808080",
  },
  label: {
    textAlign:'left',
    marginBottom: 10,
    margin:30,
    fontSize: 24,
    fontWeight:700,
  },
  text:{
    color:"#808080",
    alignSelf: "flex-start",
    margin:10,
    marginLeft:20,
    fontWeight:700,
  },
  profileimage:{
    width:40,
    height:40,
    borderRadius:50,
    //backgroundColor:'#808080',
    alignSelf: "flex-start",
    marginLeft:30,
    margin:10,
    borderWidth:1
  },
  usermessage:{
    color: "#808080",
  },
  username:{
    fontWeight:900,
  },
  time:{
    color: "#808080",
    marginRight:20,
  },
});

export default Notification;

const CONTENT = [
  {
    isExpanded: false,
    category_name: 'Biology',
    subcategory: [
      { id: 1, val: 'Today' , },
      { id: 3, val: 'Yesterday' },
    ],
  },
  
];

