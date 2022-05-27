import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
const SplashScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          animation="bounceIn"
          duraton="1500"
          source={require('../img/logo.png')}
          resizeMode="stretch"
        />
      </View>
      <View
        style={[
          styles.footer,
          {
            backgroundColor: 'white',
          },
        ]}
        animation="fadeInUpBig">
        <Text style={styles.title}>Stay connected with everyone!</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate('loginScreens')}
          style={styles.button}>
          <View colors={['#08d4c4', '#01ab9d']} style={styles.signIn}>
            <Text style={styles.textSign}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SplashScreen;

const {height} = Dimensions.get('screen');
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#67E4FF',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: 'grey',
    marginTop: 5,
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row',
  },
  textSign: {
    color: 'black',
    fontWeight: 'bold',
  },
});
