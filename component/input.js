import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {COLORS} from '../Screens/Theme';
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Input = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={{}}>
      <Text style={style.label}>{label}</Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.light
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        <TextInput
          autoCorrect={false}
          placeholderTextColor={'black'}
          secureTextEntry={hidePassword}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          style={{color: COLORS.black, flex: 1}}
          {...props}
        />
      </View>
      {error && (
        <Text style={{marginTop: 7, color: COLORS.red, fontSize: 12}}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    fontSize: 14,
    color: COLORS.grey,
    marginVertical: 5,
  },
  inputContainer: {
    height: 50,
    backgroundColor: '#EAEAEA',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderWidth: 0.5,
    borderRadius: 15,
    color: 'gray',
    width: 300,
  },
});

export default Input;
