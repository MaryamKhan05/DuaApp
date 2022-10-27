// import React in our code
import React from 'react';

// import all the components we are going to use
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
} from 'react-native';


import {
  LineChart,
} from 'react-native-chart-kit';
import {Svg} from 'react-native-svg'


const MyLineChart = () => {
  return (
    <>
      <Text style={styles.header}>Line Chart</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', ],
          datasets: [
            {
              data: [20, 45, 28, 80,],
              strokeWidth: 2,
              //color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` ,// optional
              //colors: 'yellow' // optional
              color: (opacity = 0.2) => `red ` ,// optional
              //withDots: true,
            },
          
            {
              data: [20, 45,28 ],
              strokeWidth: 3,
              //color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})` ,// optional
              //colors: 'yellow' // optional
              color: (opacity = 0.2) => `orange ` ,// optional
              withDots: true,
            },
          ],
        }}
        width={Dimensions.get('window').width - 16}
        height={220}
        chartConfig={{
          backgroundColor: "transparent",
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
            //color: (opacity = 1) => 'url(#grad)',
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          },
          useShadowColorFromDataset: true,
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
         bezier
         withInnerLines={false}
         withOuterLines={false}
         withShadow={false}
         //useShadowColorFromDataset={true}
      />
    </>
  );
};
export default MyLineChart;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: 10,
    },
    header: {
      textAlign: 'center',
      fontSize: 18,
      padding: 16,
      marginTop: 16,
    },
  });