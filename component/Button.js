import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {COLORS} from '../Screens/Theme';

const Button = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        height: 34,
        width: 300,
        backgroundColor: '#5FB8FF',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 20,
      }}>
      <Text style={{color: COLORS.white, fontSize: 20}}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
