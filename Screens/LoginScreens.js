import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Keyboard,
  Alert,
  Image,
} from 'react-native';
import React from 'react';
import {COLORS} from './Theme';
import Input from '../component/input';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../component/Loader';
import {TouchableOpacity} from 'react-native-gesture-handler';

const LoginScreens = ({navigation}) => {
  const [input, setinput] = React.useState({email: '', fullname: ''});
  const [error, setError] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!input.email) {
      handleError('Vui lòng nhập email hoặc tên đăng nhập', 'email');
      valid = false;
    }

    if (!input.password) {
      handleError('Vui lòng nhập mật khẩu', 'password');
      valid = false;
    }
    if (valid) {
      login();
    }
  };
  const login = () => {
    setLoading(true);
    setTimeout(async () => {
      setLoading(false);
      let userData = await AsyncStorage.getItem('userData');
      if (userData) {
        userData = JSON.parse(userData);
        if (
          input.email == userData.email &&
          input.password == userData.password
        ) {
          navigation.navigate('homeScreen');
          AsyncStorage.setItem(
            'userData',
            JSON.stringify({...userData, loggedIn: true}),
          );
        } else {
          Alert.alert('Error', 'Sai mật khẩu hoặc tài khoản');
        }
      } else {
        Alert.alert('Error', 'Tài khoản này không tồn tại ');
      }
      console.log(userData);
    }, 3000);
  };

  const handleOnchange = (text, input) => {
    setinput(prevState => ({...prevState, [input]: text}));
  };
  const handleError = (errorMessage, input) => {
    setError(prevState => ({...prevState, [input]: errorMessage}));
  };

  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <Loader visible={loading} />
      <View
        contentContainerStyle={{
          paddingTop: 50,
          paddingHorizontal: 10,
        }}>
        <View style={{flexDirection: 'column', alignItems: 'center'}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: 40,
              fontWeight: 'bold',
            }}>
            EDU.IO
          </Text>
          <Text
            style={{
              borderWidth: 1,
              width: 110,
              height: 3,
              borderColor: '#248900',
              backgroundColor: 'green',
            }}></Text>
        </View>

        <View style={{marginVertical: 70, alignItems: 'center'}}>
          <Text
            style={{
              color: COLORS.black,
              fontSize: 32,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            Đăng nhập
          </Text>
          <Input
            placeholder="Nhập email hoặc tên đăng nhập"
            error={error.email}
            onFocus={() => {
              handleError(null, 'email');
            }}
            onChangeText={text => handleOnchange(text, 'email')}

            // error="Input email"
          />
          <Input
            placeholder="Nhập Mật khẩu"
            error={error.password}
            password
            onFocus={() => {
              handleError(null, 'password');
            }}
            onChangeText={text => handleOnchange(text, 'password')}
            // error="Input email"
          />
          <Button onPress={validate} title={'Đăng nhập'} />
          {/* //đầu */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                borderWidth: 1,
                width: 118,
                height: 0,
                borderColor: 'gray',
                marginTop: 10,
                marginRight: 10,
                color: 'black',
              }}></Text>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              HOẶC
            </Text>
            <Text
              style={{
                borderWidth: 1,
                width: 118,
                height: 1,
                borderColor: 'gray',
                marginTop: 10,
                marginLeft: 10,
                color: 'black',
              }}></Text>
          </View>

          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
                flexDirection: 'row',
                width: 130,
                height: 41,
                marginLeft: 17,
              }}>
              <Image
                source={{
                  uri: 'https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png',
                }}
                style={{width: 35, height: 35}}
              />
              <Text
                style={{fontWeight: 'bold', color: '#0074CF', marginLeft: 5}}>
                FACEBOOK
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.27,
                shadowRadius: 4.65,
                elevation: 6,
                margin: 20,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
                flexDirection: 'row',
                width: 130,
                height: 41,
              }}>
              <Image
                source={{
                  uri: 'https://s3-alpha-sig.figma.com/img/9358/a632/fe765206d076c18af39c815b3d7dc61f?Expires=1654473600&Signature=ascb0Mq3LUgP~QYirgtPiEULjMDsu1c1gOA01SNn~5aDuAXmxZVkdr5KLriXxsWxb~N3MHshgoxmUlD~831E6igX6U7sdooZVD~xXRT50Jwjnm3AsUC9hAcsVmSdomrxmYoUe9WZf7j~nyXgsrh2ajmpeWj7~MIibLdvuaHhR6Pb7qW9D7V8Sg2YZcMpp0nezejghdufbO~olhAjRDpXzgGKuWy2ixeUbEnzTE0undmc~5lF3tFzdXNdQLOsroWURHDvz2zPKj8hG6aGpJZrsk1jQU4~kgykxoc5WmKIiQO1hzquVUZ4KC-kDqLN~bbVtkCORXWg9LRgzB5GlBO54A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
                }}
                style={{width: 23, height: 23}}
              />
              <Text
                style={{fontWeight: 'bold', color: '#0074CF', marginLeft: 10}}>
                GOOGLE
              </Text>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 130,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: COLORS.black,
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              Chưa có tài khoản?
            </Text>
            <Text
              onPress={() => navigation.navigate('registrationScreens')}
              style={{
                color: '#5FB8FF',
                fontWeight: 'bold',
                fontSize: 18,
              }}>
              ĐĂNG KÍ
            </Text>
          </View>
          {/* //Đuôi */}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreens;
