import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, View, Text, Button, TextInput, Image, Keyboard } from 'react-native';
import { Icon } from '@rneui/themed';
import RecipeModal from '../View/RecipeModal'
import Recipe from '../Model/Recipe'

import useStore from '../Model/Store'

export default function NewRecipeButton(){
    const [isModalVisible, setIsModalVisible] = useState(false);
    const modifySelectedRecipe = useStore((state) => state.modifySelectedRecipe)

    return (
      <View>
       <TouchableOpacity
          testID='showModalButton'
          onPress={_ => {modifySelectedRecipe(new Recipe()); setIsModalVisible(true)}}
          style={styles.roundButton}>
             <Icon name='add' color='white' size={40} containerStyle={{margin:5}}/>
        </TouchableOpacity>
        <RecipeModal title="Új recept hozzáadás" mode="new" isVisible={isModalVisible} testID='recipeModal' hideModal={() => setIsModalVisible(false)}/>
      </View>
    );
}

const styles = StyleSheet.create({
    roundButton: {
      width: 50,  
      height: 50,   
      borderRadius: 60,            
      backgroundColor: 'rgba(72,110,115, 0.8)',                                    
      position: 'absolute',                                          
      bottom: 40,                                                    
      right: 40,
    }
  });