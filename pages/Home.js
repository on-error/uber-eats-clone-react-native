import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';
import { Divider } from 'react-native-elements';
import BottomIcons from '../components/BottomIcons';
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantItems, {
  localRestaurants,
} from '../components/RestaurantItems';
import SearchBar from '../components/SearchBar';

// YELP API KEY - 3Rj8D2ilW2Z4XpljyAEphK_sqA7CH3IFw6Vk_tbcKv3bG9050fhZwCa8L7JlTIwakmj6a-Pz6G-8aRPyrUeflYiQYlL7q8sCR0QCI4uN6uQcgDgcBvIUf5y9rmS0Y3Yx
const YELP_API_KEY =
  '3Rj8D2ilW2Z4XpljyAEphK_sqA7CH3IFw6Vk_tbcKv3bG9050fhZwCa8L7JlTIwakmj6a-Pz6G-8aRPyrUeflYiQYlL7q8sCR0QCI4uN6uQcgDgcBvIUf5y9rmS0Y3Yx';
const Home = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('Delivery');
  const [restaurantsData, setRestaurantsData] = useState(localRestaurants);

  const getRestaurantsList = () => {
    const yelpUrl =
      'https://api.yelp.com/v3/businesses/search?term=restaurants&location=LosAngeles';

    // const config = {
    //   method: 'GET',
    //   url: yelpUrl,
    //   headers: {
    //     Authorization: `Bearer ${YELP_API_KEY}`,
    //   },
    // };

    // return axios(config)
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((json) => setRestaurantsData(json.businesses))
    //   .catch((e) => {
    //     console.error(e);
    //   });

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    console.log(activeTab);
    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantsData(() => {
          const arr = json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          );
          return arr;
        })
      )
      .catch((e) => console.error(e));
  };

  useEffect(() => {
    getRestaurantsList();
  }, [activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: '#eee', flex: 1 }}>
      <View style={{ backgroundColor: 'white', padding: 15 }}>
        <HeaderTabs active={activeTab} setActive={setActiveTab} />
        <SearchBar />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems data={restaurantsData} navigation={navigation} />
      </ScrollView>
      <Divider />
      <BottomIcons />
    </SafeAreaView>
  );
};

export default Home;
