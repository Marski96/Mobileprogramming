import React, { useState } from 'react';
import { Alert, StyleSheet, Text, View, Button, TextInput, FlatList, Image } from 'react-native';

export default function RecipeFinder() {
  const [ingredient, setIngredient] = useState('');
  const [recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    const url = 'http://www.recipepuppy.com/api/?i=' + ingredient;
    fetch(url)
    .then((response) => response.json())
    .then((responseJson) => { 
       setRecipes(responseJson.results);
       console.log(recipes)
    })
    .catch((error) => { 
      Alert.alert('Error' , error); 
    }); 
  }
  
  const listSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "100%",
          backgroundColor: "#CED0CE",
        }}
      />
    );
  };

  return (
    <View style={styles.container}>

      <FlatList
        style={{marginLeft : "5%"}}
        keyExtractor={item => item.title}
        renderItem={({item}) => 
                <View style={{paddingTop:15}}>
                    <Text>{item.title}</Text>
                    <Image source={{uri: item.thumbnail}}
                            style={{width: 200, height: 200}} />
                </View>
            }
        data={recipes}
      /> 

      <TextInput 
        style={{fontSize: 18, width: 200, borderColor: 'gray', borderWidth: 1}} 
        value={ingredient} 
        onChangeText={(ingredient) => setIngredient(ingredient)} 
      />
     <Button title="Find" onPress={getRecipes} />
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
 },
});