import { View, Text, Image } from 'react-native';
import React from 'react';

const yelpRestaurantInfo = {
  name: 'Farmhouse',
  image:
    'https://img.freepik.com/free-photo/happy-waiter-serving-food-group-cheerful-friends-pub_637285-12525.jpg?w=2000',
  price: 'INR',
  reviews: '1700',
  rating: 4.5,
  categories: [{ title: 'Thai' }, { title: 'Comfort Food' }],
};

// const title = 'Farmhouse';
// const description = 'Thai . Comfort Food . $$ . card . 4 start (243+)';

const About = ({ route }) => {
  const { name, image, price, reviews, rating, categories } = route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(' . ');

  const description = `${formattedCategories} ${
    price ? ' . ' + price : ''
  } . ${rating} star . (${reviews}+)`;

  return (
    <View>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: '100%', height: 180 }}
      />
      <Text
        style={{
          fontSize: 29,
          fontWeight: '600',
          marginTop: 10,
          marginHorizontal: 15,
        }}
      >
        {name}
      </Text>
      <Text
        style={{
          marginTop: 10,
          marginHorizontal: 15,
          fontWeight: '400',
          fontSize: 15.5,
        }}
      >
        {description}
      </Text>
    </View>
  );
};

export default About;
