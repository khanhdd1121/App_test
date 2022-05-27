import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View
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
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Animal')}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../img/a6103757bb10f461d1e2e78540055998.png')}
          />
          <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
            Động vật
          </Text>
        </TouchableOpacity>
      </View>
      <View
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
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Fruit')}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../img/8fae754d8344c1376571928f3d7a6690.png')}
          />
          <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
            Hoa quả
          </Text>
        </TouchableOpacity>
      </View>
      <View
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
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('Machine')}>
          <Image
            style={{width: 150, height: 150}}
            source={require('../img/images.png')}
          />
          <Text style={{textAlign: 'center', fontSize: 30, color: 'black'}}>
            Xe cộ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
