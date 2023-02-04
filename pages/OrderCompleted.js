import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import * as CheckMark from '../assets/animations/check-mark.json';
import firebase from '../firebase';
import 'firebase/compat/firestore';
import MenuItems from '../components/restaurantsDetails/MenuItems';
import { ScrollView } from 'react-native-gesture-handler';

const OrderCompleted = () => {
  const [lastOrder, setLastOrder] = useState();
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace('Rs.', '')))
    .reduce((prev, curr) => prev + curr, 0);

  useEffect(() => {
    const db = firebase.firestore();
    db.collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data());
        });
      });

    // return unsubscribe();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white', padding: 10 }}>
      <View style={{ margin: 15, alignItems: 'center', height: '100%' }}>
        <LottieView
          style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
          Your order at {restaurantName} has been placed for {'\u20B9'} {total}.
        </Text>
        <ScrollView>
          <MenuItems hideCheckbox={true} foods={lastOrder?.items || []} />
          <LottieView
            style={{ height: 100, alignSelf: 'center', marginBottom: 30 }}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
            loop={false}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default OrderCompleted;
