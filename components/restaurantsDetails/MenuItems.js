import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

const MenuItems = ({ restaurantName, hideCheckbox, marginLeft, foods }) => {

  return (
    <View style={{ height: 550 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {foods.map((item, index) => {
          return (
            <View key={index}>
              <MenuItem
                data={item}
                restaurantName={restaurantName}
                hideCheckbox={hideCheckbox}
                marginLeft={marginLeft || 0}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const MenuItem = ({ data, restaurantName, hideCheckbox, marginLeft }) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cartReducer.selectedItems);

  const selectItem = (checkboxValue) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...data, restaurantName: restaurantName, checkboxValue },
    });
  };

  const isFoodInCart = () => {
    return Boolean(
      items.find(
        (item) =>
          item.title === data.title && item.restaurantName === restaurantName
      )
    );
  };

  return (
    <View>
      <View style={styles.menuItemStyle}>
        {!hideCheckbox && (
          <BouncyCheckbox
            onPress={selectItem}
            borderColor="lightgray"
            iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
            fillColor="green"
            isChecked={isFoodInCart()}
          />
        )}
        <View style={{ width: 240, justifyContent: 'space-evenly' }}>
          <Text style={{ fontSize: 19, fontWeight: '600' }}>{data?.title}</Text>
          <Text>{data?.description}</Text>
          <Text>{data?.price}</Text>
        </View>
        <View>
          <Image
            source={{ uri: data?.image }}
            style={{ height: 100, width: 100, borderRadius: 10, marginLeft }}
          />
        </View>
      </View>
      <Divider width={0.5} orientation="vertical" />
    </View>
  );
};

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
});

export default MenuItems;
