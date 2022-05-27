import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Keyboard,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import Input from '../component/input';
import {COLORS} from './Theme';
import Button from '../component/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../component/Loader';
const RegistrationScreens = ({navigation}) => {
  const [input, setinput] = React.useState({
    email: '',
    fullname: '',
    phonenumber: '',
    password: '',
  });
  const [error, setError] = React.useState({});
  const [loading, setLoading] = React.useState(false);

  const validate = () => {
    Keyboard.dismiss();
    let valid = true;
    if (!input.email) {
      handleError('Vui lòng nhập email', 'email');
      valid = false;
    } else if (!input.email.match(/\S+@\S+\.\S+/)) {
      handleError('Please input email', 'email');
      valid = false;
    }
    if (!input.fullname) {
      handleError('Vui lòng nhập họ tên', 'fullname');
      valid = false;
    }

    if (!input.phonenumber) {
      handleError('Vui lòng nhập điện thoại', 'phonenumber');
      valid = false;
    }

    if (!input.password) {
      handleError('Vui lòng nhập mật khẩu', 'password');
      valid = false;
    }
    if (valid) {
      register();
    }
  };
  const register = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      try {
        AsyncStorage.setItem('userData', JSON.stringify(input));
        navigation.navigate('loginScreens');
      } catch (error) {
        alert('Error', 'Something went wrong');
      }
      console.log(input);
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
          paddingHorizontal: 10,
        }}>
        <View
          style={{
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
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
            }}></Text>
        </View>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 30,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          Đăng ký
        </Text>
        <View style={{alignItems: 'center'}}>
          <Input
            placeholder="Nhập email"
            error={error.email}
            onFocus={() => {
              handleError(null, 'email');
            }}
            onChangeText={text => handleOnchange(text, 'email')}

            // error="Input email"
          />

          <Input
            placeholder="Nhập họ tên"
            error={error.fullname}
            onFocus={() => {
              handleError(null, 'fullname');
            }}
            onChangeText={text => handleOnchange(text, 'fullname')}
            style={{color: 'black'}}
            // error="Input email"
          />
          <Input
            keyboardType="numeric"
            placeholder="Nhập số điện thoại"
            error={error.phonenumber}
            onFocus={() => {
              handleError(null, 'phonenumber');
            }}
            onChangeText={text => handleOnchange(text, 'phonenumber')}
            // error="Input email"
          />
          <Input
            placeholder="Nhập mật khẩu"
            error={error.password}
            password
            onFocus={() => {
              handleError(null, 'password');
            }}
            onChangeText={text => handleOnchange(text, 'password')}
            // error="Input email"
          />
          <Button onPress={validate} title={'Đăng ký'} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                borderWidth: 1,
                width: 118,
                height: 1,
                borderColor: 'gray',
                marginTop: 10,
                marginRight: 10,
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
              }}></Text>
          </View>

          <View style={{flexDirection: 'row'}}>
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
                margin: 15,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#fff',
                borderRadius: 10,
                flexDirection: 'row',
                width: 130,
                height: 41,
                marginLeft: 15,
              }}>
              <Image
                source={{
                  uri: 'https://brandlogos.net/wp-content/uploads/2021/04/facebook-icon.png',
                }}
                style={{width: 35, height: 35}}
              />
              <Text
                style={{fontWeight: 'bold', color: '#0074CF', marginLeft: 10}}>
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
                margin: 15,
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RegistrationScreens;
