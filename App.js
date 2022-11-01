// import React in our code
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  
} from 'react-native';
const {width,height}=Dimensions.get('window')

import Practice from './src/prac';
import Reset from './src/ResetPassword';
import NewPassword from './src/NewPassword';
import ForgetPassword from './src/ForgetPassword';
import Verification from './src/Verification';
import SignUp from './src/SignUp';
import Flags from './src/Flags';
import Profile from './src/Profile';
import TabViewExample from './src/Profile';
import Settings from './src/Settings';
import Premium from './src/Premium';
import Email from './src/Email';
import Payment from './src/Payment';
import Login from './src/Login';
import Brightness from './src/Settings/slider';
import Pop from './src/Settings/popup';
import Favourite from './src/Favourites';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          {/* <ForgetPassword/> */}
          {/* <Verification/> */}
          {/* <NewPassword/> */}
          {/* <Reset/> */}
          {/* <TabViewExample/> */}
          {/* <Profile/> */}
          {/* <Settings/> */}
          {/* <Premium/> */}
          {/* <Email/> */}
          {/* <Payment/> */}
          {/* <Login/> */}
          {/* <Brightness/> */}
          {/* <Pop/> */}
          <Favourite/>
        </View>
    </SafeAreaView>
  );
};
export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height:height,
    width:width,
    //backgroundColor: 'red',
    //justifyContent: 'center',
    //alignItems: 'center',
    //textAlign: 'center',
    //padding: 10,
  },

});
