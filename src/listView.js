// Import React
import React, { useEffect, useState } from 'react';
// Import required components
import {
  SafeAreaView,
  LayoutAnimation,
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  TouchableOpacity,
  Platform,
} from 'react-native';
const ExpandableComponent = ({ item, onClickFunction }) => {
    const [layoutHeight, setLayoutHeight] = useState(0);
    useEffect(() => {
      if (item.isExpanded) {
        setLayoutHeight(null);
      } else {
        setLayoutHeight(0);
      }
    }, [item.isExpanded]);
  
    return (
      <View>
        <View style={{padding:'5%'}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{item.category_name}</Text>
  
        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={styles.caption}>
          <Text>15 materials</Text>
        </View>
        <View style={styles.percentage}>
          <Text style={{color:'white'}}>100%</Text>
        </View>
        </View>
  
        <View
          style={{
            height: layoutHeight,
            overflow: 'hidden',
          }}>
  
          <View style={styles.separator} />
          {item.subcategory.map((item, key) => (
            <View style={styles.content}>
              <Text style={styles.text}>
                 {item.val}
              </Text>
              <View  />
            </View>
          ))}
        </View>
        </View>
        <TouchableOpacity
        //activeOpacity={0.8}
        onPress={onClickFunction}
        >
        <View style={styles.icon}>
        </View>
        </TouchableOpacity>
        </View>
        
      </View>
    );
  };
  
  const ListView = () => {
    const [listDataSource, setListDataSource] = useState(CONTENT);
    const [multiSelect, setMultiSelect] = useState(false);
  
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  
    const updateLayout = (index) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      const array = [...listDataSource];
      if (multiSelect) {
        // If multiple select is enabled
        array[index]['isExpanded'] = !array[index]['isExpanded'];
      } else {
        // If single select is enabled
        array.map((value, placeindex) =>
          placeindex === index
            ? (array[placeindex]['isExpanded'] = !array[placeindex]['isExpanded'])
            : (array[placeindex]['isExpanded'] = false)
        );
      }
      setListDataSource(array);
    };
  
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <TouchableOpacity onPress={() => setMultiSelect(!multiSelect)}>
            </TouchableOpacity>
          </View>
          <ScrollView>
            {listDataSource.map((item, key) => (
              <ExpandableComponent
                key={item.category_name}
               onClickFunction={() => {
                  updateLayout(key);
                }}
                item={item}
              />
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  };
  
  export default ListView;
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#808080',
    },
    titleText: {
      flex: 1,
      fontSize: 22,
      fontWeight: 'bold',
    },
    header: {
      backgroundColor: '#fff',
      padding: 20,
      borderRadius:15,
    },
    headerText: {
      fontSize: 16,
      fontWeight: '500',
    },
    separator: {
      height: 0.5,
      backgroundColor: '#808080',
      // width: '98%',
      marginTop:16,
      marginLeft: 10,
      marginRight: 10,
    },
    text: {
      fontSize: 16,
      color: '#606070',
      padding: 10,
    },
    content: {
      //paddingLeft: 10,
      //paddingRight: 10,
      backgroundColor: '#fff',
      borderRadius:10,
      //padding:'5%'
    },
    icon:{
      backgroundColor: '#fff',
      width:20,
      height:20,
      alignSelf:'center',
      borderRadius:50,
      marginTop:-9,
      //borderWidth:0.5,
      shadowOpacity:0.1,
          shadowColor: `black`,
          shadowOffset: {
              width: 3,
              height: 3,
          },
          shadowRadius: 3.84,
          elevation: 10,
    },
    percentage:{
      backgroundColor:'green',
      borderRadius:50,
      padding:'2%'
    },
    caption:{
      paddingTop:'2%'
    },
  });
  
  //Dummy content to show
  //You can also use dynamic data by calling webservice
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
  