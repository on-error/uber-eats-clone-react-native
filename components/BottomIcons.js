import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const BottomIcons = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        margin: 10,
        marginHorizontal: 30,
        justifyContent: 'space-between',
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Search" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="receipt" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
};

const Icon = ({ icon, text }) => {
  return (
    <TouchableOpacity>
      <FontAwesome5
        name={icon}
        size={25}
        style={{ marginBottom: 3, alignSelf: 'center' }}
      />
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};

export default BottomIcons;
