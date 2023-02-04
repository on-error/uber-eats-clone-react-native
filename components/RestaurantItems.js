import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const localRestaurants = [
  {
    name: 'Aryan',
    image_url:
      'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    categories: ['Indian', 'Chinese'],
    price: '$$',
    reviews: 1234,
    rating: 4.5,
  },
  {
    name: 'Royal Cafe',
    image_url:
      'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    categories: ['Indian', 'Chinese'],
    price: '$$',
    reviews: 1234,
    rating: 4.5,
  },
  {
    name: 'The Terrace',
    image_url:
      'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    categories: ['Indian', 'Chinese'],
    price: '$$',
    reviews: 1234,
    rating: 4.5,
  },
  {
    name: 'Novotel',
    image_url:
      'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    categories: ['Indian', 'Chinese'],
    price: '$$',
    reviews: 1234,
    rating: 4.5,
  },
  {
    name: 'Taj',
    image_url:
      'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
    categories: ['Indian', 'Chinese'],
    price: '$$',
    reviews: 1234,
    rating: 4.5,
  },
];

const RestaurantItems = ({ data, navigation }) => {
  return (
    <View>
      {data.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            activeOpacity={1}
            // style={{ marginBottom: 5 }}
            onPress={() =>
              navigation.navigate('RestaurantDetail', {
                name: item.name,
                image: item.image_url,
                price: item.price,
                reviews: item.review_count,
                rating: item.rating,
                categories: item.categories,
              })
            }
          >
            <View
              style={{ marginTop: 10, padding: 15, backgroundColor: 'white' }}
            >
              <RestaurantImage image={item.image_url} />
              <RestaurantInfo
                name={item.name}
                reviews={item.reviews}
                rating={item.rating}
              />
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const RestaurantImage = ({ image }) => {
  return (
    <>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: '100%', height: 180 }}
      />
      <TouchableOpacity style={{ position: 'absolute', top: 20, right: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#eee" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ name, rating }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: 'bold' }}>{name}</Text>
        <Text style={{ fontSize: 13, color: 'gray' }}>30-45 . min</Text>
      </View>
      <View
        style={{
          backgroundColor: '#eee',
          height: 30,
          width: 30,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 15,
        }}
      >
        <Text>{rating}</Text>
      </View>
    </View>
  );
};

export default RestaurantItems;
