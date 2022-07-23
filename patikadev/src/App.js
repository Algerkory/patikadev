
import React from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  Dimensions,
  FlatList,
  View
} from 'react-native';
import Reactbar from './Reactbar';
import NativeBar from './Nativebar';
import NewsCay from './Components/NewsCard/NewsCay';
import news_banner_data from './Components/NewsCard/news_banner_data.json';
function App() {


  const renderNews = ({ item }) => <NewsCay news={item} />;
  const flatListKey = (item) => item.u_id.toString();

  return (
    <View style={styles.container}>
      <View>
        <NativeBar />
        <Reactbar/>
      </View>
      <FlatList
        numColumns={2}
        keyExtractor={flatListKey}
        data={news_banner_data}
        renderItem={renderNews}
      />
</View>
    
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 30,

  }
});


export default App;