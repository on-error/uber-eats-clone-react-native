import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const HeaderTabs = ({ active, setActive }) => {
  // const [active, setActive] = useState('delivery');
  return (
    <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
      <HeaderButton
        name="Delivery"
        onPress={setActive}
        active={active}
        btnColor="black"
        textColor="white"
      />
      <HeaderButton
        name="Pickup"
        onPress={setActive}
        active={active}
        btnColor="black"
        textColor="white"
      />
    </View>
  );
};

export const HeaderButton = ({
  name,
  onPress,
  active,
  btnColor,
  textColor,
  style,
}) => {
  return (
    <TouchableOpacity
      style={{
        ...style,
        paddingVertical: 6,
        paddingHorizontal: 16,
        backgroundColor: active === name ? btnColor : 'white',
        borderRadius: 30,
      }}
      onPress={() => onPress(name)}
    >
      <Text
        style={{
          color: active === name ? textColor : 'black',
          fontWeight: '900',
          fontSize: 15,
        }}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderTabs;
