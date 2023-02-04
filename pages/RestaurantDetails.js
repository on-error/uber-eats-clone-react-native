import { View, Text } from 'react-native';
import React from 'react';
import About from '../components/restaurantsDetails/About';
import { Divider } from 'react-native-elements';
import MenuItem from '../components/restaurantsDetails/MenuItems';
import ViewCart from '../components/restaurantsDetails/ViewCart';

const RestaurantDetails = ({ route, navigation }) => {
  const foods = [
    {
      title: 'Matar Paneer1',
      description: 'Amazing Matar Paneer',
      price: 'Rs.200',
      image:
        'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    },
    {
      title: 'Matar Paneer2',
      description: 'Amazing Matar Paneer',
      price: 'Rs.200',
      image:
        'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    },
    {
      title: 'Matar Paneer3',
      description: 'Amazing Matar Paneer',
      price: 'Rs.200',
      image:
        'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    },
    {
      title: 'Matar Paneer4',
      description: 'Amazing Matar Paneer',
      price: 'Rs.200',
      image:
        'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    },
    {
      title: 'Matar Paneer5',
      description: 'Amazing Matar Paneer',
      price: 'Rs.200',
      image:
        'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    },
    {
      title: 'Aloo Paratha6',
      description: 'Amazing aloo paratha',
      price: 'Rs.200',
      image:
        'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    },
  ];
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItem restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetails;
