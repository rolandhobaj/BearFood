import React from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import FoodSearchBar from './src/View/FoodSearchBar'
import FoodFlatList from './src/View/FoodFlatList'
import NewRecipeButton from './src/View/NewRecipeButton'


const FoodBear = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./images/bg.png')} resizeMode="cover" style={styles.image}>
        <View style={styles.contentContainer}>
          <FoodSearchBar />
          <FoodFlatList />
        </View>
        <NewRecipeButton/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    flex: 1,
  },
  contentContainer: {
    flex: 1
  },
});


export default FoodBear;