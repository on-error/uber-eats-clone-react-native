import { StatusBar } from 'expo-status-bar';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import HeaderTabs from './components/HeaderTabs';
import RootNavigation from './navigation';
import Home from './pages/Home';
import RestaurantDetails from './pages/RestaurantDetails';

export default function App() {
  return (
    <SafeAreaView style={style.androidSafeArea}>
      {/* <Home /> */}
      <RootNavigation />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  androidSafeArea: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 45 : 0,
  },
});
